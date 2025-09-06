import { GetServerSideProps } from 'next'
import React, { useMemo, useRef, useState } from 'react'
import PdfExportButton from '../../components/ui/
import ResumePreview, { ResumeData } from '../../components/ui/
import { createServerClient } from '../../utils/supabase/