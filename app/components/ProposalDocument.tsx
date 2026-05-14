'use client';

import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

interface ServiceItem {
  title: string;
  price: number;
  frequency: 'monthly' | 'annual';
}

interface ProposalData {
  companyName: string;
  contactName: string;
  email: string;
  selectedServices: ServiceItem[];
  discountPercent: number;
  startDate: string;
}

interface ProposalDocumentProps {
  data: ProposalData;
}

const ProposalDocument = ({ data }: ProposalDocumentProps) => {
  const subtotal = data.selectedServices.reduce((sum: number, s: ServiceItem) => sum + s.price, 0);
  const discountAmount = (subtotal * data.discountPercent) / 100;
  const total = subtotal - discountAmount;

  const styles = StyleSheet.create({
    page: {
      padding: 40,
      fontFamily: 'Helvetica',
      fontSize: 11,
      color: '#1f2937',
    },
    header: {
      marginBottom: 24,
      borderBottom: '2 solid #2563eb',
      paddingBottom: 16,
    },
    logo: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#2563eb',
    },
    subtitle: {
      fontSize: 10,
      color: '#6b7280',
      marginTop: 4,
    },
    section: {
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 13,
      fontWeight: 'bold',
      color: '#111827',
      marginBottom: 8,
      backgroundColor: '#f3f4f6',
      padding: 6,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: '#e5e7eb',
      paddingVertical: 6,
    },
    label: {
      color: '#374151',
    },
    value: {
      fontWeight: 'bold',
      color: '#111827',
    },
    footer: {
      position: 'absolute',
      bottom: 30,
      left: 40,
      right: 40,
      fontSize: 9,
      color: '#6b7280',
      borderTopWidth: 1,
      borderTopColor: '#e5e7eb',
      paddingTop: 8,
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.logo}>ZionTechGroup</Text>
          <Text style={styles.subtitle}>AI & IT Solutions — Professional Services Proposal</Text>
          <Text style={styles.subtitle}>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Client Information</Text>
          <View style={styles.row}><Text style={styles.label}>Company:</Text><Text style={styles.value}>{data.companyName || '—'}</Text></View>
          <View style={styles.row}><Text style={styles.label}>Contact:</Text><Text style={styles.value}>{data.contactName || '—'}</Text></View>
          <View style={styles.row}><Text style={styles.label}>Email:</Text><Text style={styles.value}>{data.email || '—'}</Text></View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Selected Services</Text>
          {data.selectedServices.map((svc: ServiceItem, i: number) => (
            <View style={styles.row} key={i}>
              <Text style={styles.label}>{svc.title}</Text>
              <Text style={styles.value}>${svc.price.toLocaleString()}/{svc.frequency === 'annual' ? 'yr' : 'mo'}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pricing Summary</Text>
          <View style={styles.row}><Text style={styles.label}>Subtotal</Text><Text style={styles.value}>${subtotal.toLocaleString()}</Text></View>
          {data.discountPercent > 0 && (
            <View style={styles.row}>
              <Text style={styles.label}>Discount ({data.discountPercent}%)</Text>
              <Text style={{...styles.value, color: '#059669'}}>-${discountAmount.toLocaleString()}</Text>
            </View>
          )}
          <View style={{...styles.row, marginTop: 6}}>
            <Text style={{...styles.label, fontSize: 14}}>Total</Text>
            <Text style={{...styles.value, fontSize: 14, color: '#2563eb'}}>${total.toLocaleString()}/${data.startDate.includes('Annual') ? 'yr' : 'mo'}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Terms & Commitments</Text>
          <Text style={{fontSize: 10, lineHeight: 14}}>
            • Standard SLA: 99.9% uptime for Basic, 99.95% for Pro, 99.99% for Enterprise tier.\n
            • Support response: 24h (Basic), 12h (Pro), 4h (Enterprise).\n
            • Initial billing cycle begins on {data.startDate}.\n
            • Cancel anytime with 30-day notice. No setup fees.\n
            • Services delivered remotely by ZionTechGroup, LLC.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Questions?</Text>
          <Text style={{fontSize: 10}}>
            ZionTechGroup, LLC\n
            364 E Main St STE 1008, Middletown, DE 19709\n
            📞 +1 302 464 0950\n
            ✉️ kleber@ziontechgroup.com
          </Text>
        </View>

        <View style={styles.footer}>
          <Text>This proposal is valid for 30 days. Acceptance constitutes agreement to ZionTechGroup's standard service terms.</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ProposalDocument;
