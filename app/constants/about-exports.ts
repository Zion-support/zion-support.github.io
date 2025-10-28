import type { Metadata } from 'next';
import { aboutMetadata } from './about-metadata';

export const dynamic = 'force-static';
export const metadata: Metadata = aboutMetadata;