
import { GetServerSideProps  } from 'next';
import React, { useMemo, useRef, useState } from 'react',;
import PdfExportButton from '../../components/ui/PdfExportButton',;
import ResumePreview, { ResumeData } from '../../components/ui/ResumePreview';
import { createServerClient } from '../../utils/supabase/server';
export type ResumePreviewPageProps = any;

