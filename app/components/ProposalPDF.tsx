'use client';

import type { Proposal } from '../lib/portal-storage';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

export const ProposalPDF = ({ proposal }: { proposal: Proposal }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Proposal</Text>
        <Text style={styles.subtitle}>ZionTechGroup — AI &amp; IT Solutions</Text>

        <View style={styles.divider} />

        <Text style={styles.text}>Company: {proposal.companyName}</Text>
        <Text style={styles.text}>Contact: {proposal.contactEmail}</Text>
        {proposal.contactPhone ? <Text style={styles.text}>Phone: {proposal.contactPhone}</Text> : null}
        <Text style={styles.text}>Budget: {proposal.budget}</Text>
        <Text style={styles.text}>Timeline: {proposal.timeline}</Text>
        <Text style={styles.text}>Generated: {new Date(proposal.generatedAt).toLocaleString()}</Text>

        <Text style={styles.subtitle}>Selected Services</Text>
        <View style={styles.divider} />
        {proposal.selectedServices.map((s: any, i: number) => (
          <Text key={i} style={styles.text}>
            {i + 1}. {s.title} — {s.pricing?.basic ?? 'Custom'}
          </Text>
        ))}

        <View style={styles.divider} />
        <Text style={styles.subtitle}>Contact Us</Text>
        <Text style={styles.text}>Zion Tech Group</Text>
        <Text style={styles.text}>+1 302 464 0950</Text>
        <Text style={styles.text}>kleber@ziontechgroup.com</Text>
        <Text style={styles.text}>364 E Main St STE 1008, Middletown, DE 19709</Text>
      </View>
    </Page>
  </Document>
);

export default ProposalPDF;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 11,
    color: '#222',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#1a56db',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 8,
  },
  text: {
    fontSize: 10,
    marginBottom: 3,
  },
});
