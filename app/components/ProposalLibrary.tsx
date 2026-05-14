'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, DollarSign, Calendar, Download, Trash2, Eye, Clock, Building2, User, Mail } from 'lucide-react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import toast from 'react-hot-toast';
import type { Proposal } from '../lib/portal-storage';

interface ProposalLibraryProps {
  proposals: Proposal[];
  onDelete: (id: string) => void;
}

// ── PDF Document ─────────────────────────────────────────────────────────────
const ProposalPDF = ({ proposal }: { proposal: Proposal }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Proposal</Text>
        <Text style={styles.subtitle}>ZionTechGroup — AI & IT Solutions</Text>

        <View style={styles.divider} />

        <Text style={styles.heading}>Client Information</Text>
        <Text>{proposal.companyName}</Text>
        <Text>{proposal.contactName}</Text>
        <Text>{proposal.email}</Text>

        <View style={styles.divider} />

        <Text style={styles.heading}>Selected Services</Text>
        {proposal.selectedServices.map((svc, i) => (
          <View key={i} style={styles.serviceRow}>
            <Text>{svc.title}</Text>
            <Text>{svc.tier} — ${svc.price}/{svc.frequency === 'annual' ? 'yr' : 'mo'}</Text>
          </View>
        ))}

        <View style={styles.divider} />

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Subtotal</Text>
          <Text>${proposal.subtotal}/mo</Text>
        </View>
        {proposal.discount > 0 && (
          <View style={styles.totalRow}>
            <Text style={styles.discountLabel}>Annual Discount</Text>
            <Text style={styles.discountValue}>-${proposal.discount}</Text>
          </View>
        )}
        <View style={[styles.totalRow, styles.grandTotal]}>
          <Text style={styles.grandTotalLabel}>Total</Text>
          <Text>${proposal.total}/mo</Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.footer}>
          Contact: +1 302 464 0950 | kleber@ziontechgroup.com | 364 E Main St STE 1008, Middletown, DE 19709
        </Text>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 11, font: 'Helvetica' },
  section: { marginBottom: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 4 },
  subtitle: { fontSize: 12, color: '#666', marginBottom: 20 },
  divider: { height: 1, backgroundColor: '#ddd', marginVertical: 12 },
  heading: { fontSize: 14, fontWeight: 'bold', marginBottom: 8 },
  serviceRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  totalLabel: { fontWeight: 'bold' },
  discountLabel: { color: '#059669' },
  discountValue: { color: '#059669' },
  grandTotal: { marginTop: 8, borderTopWidth: 1, borderTopColor: '#000', paddingTop: 8 },
  grandTotalLabel: { fontSize: 14, fontWeight: 'bold' },
  footer: { fontSize: 9, color: '#888', marginTop: 30, textAlign: 'center' },
});

export function ProposalLibrary({ proposals, onDelete }: ProposalLibraryProps) {
  return (
    <div className="space-y-4">
      {proposals.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
          <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No saved proposals yet.</p>
          <a href="/proposal-generator" className="text-indigo-600 hover:underline text-sm mt-2 inline-block">
            Create your first proposal →
          </a>
        </div>
      ) : (
        proposals.map((proposal) => (
          <motion.div
            key={proposal.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{proposal.companyName}</h3>
                <p className="text-gray-500 text-sm">{proposal.contactName} · {proposal.email}</p>
              </div>
              <div className="flex items-center gap-2">
                <PDFDownloadLink
                  document={<ProposalPDF proposal={proposal} />}
                  fileName={`proposal-${proposal.id.slice(0, 8)}.pdf`}
                >
                  {({ loading }) => (
                    <button
                      disabled={loading}
                      className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg disabled:opacity-50"
                      title="Download PDF"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  )}
                </PDFDownloadLink>
                <button
                  onClick={() => onDelete(proposal.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(proposal.createdAt).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                ${proposal.total}/mo
              </span>
              <span className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                {proposal.selectedServices.length} service{proposal.selectedServices.length > 1 ? 's' : ''}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {proposal.selectedServices.map((svc, i) => (
                <span key={i} className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-medium">
                  {svc.title} ({svc.tier})
                </span>
              ))}
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
}
