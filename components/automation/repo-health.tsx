




import fs from 'fs';
import fs from 'fs',
import path from 'path';
import type { GetStaticProps } from 'next';
interface Report {
  generatedAt: string;
  commits: { last7d: number, last30d: number },
  changes: { last7dFiles: string[] },
  largestFiles: { file: string, bytes: number }[],
  stalePages: { file: string, lastCommitAt: string }[]
}
 



