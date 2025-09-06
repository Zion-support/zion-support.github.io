import { GetServerSideProps  } from 'next';
import React, { useRef, useState } from 'react',
import PdfExportButton from '../../../components/ui/PdfExportButton',
import ResumePreview, { ResumeData } from '../../../components/ui/ResumePreview';
import { createServerClient  } from '../../../utils/supabase/server';
export default function TalentPortfolio() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const ref = null;