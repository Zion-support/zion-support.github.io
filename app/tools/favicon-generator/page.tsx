import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Check, DownloadAll } from '../icons';

type FaviconMode = 'text' | 'emoji' | 'image';

interface SizeOption {
  size: number;
  label: string;
  use: string;
}

const SIZES: SizeOption[] = [
  { size: 16, label: '16×16', use: 'Favicon (classic)' },
  { size: 32, label: '32×32', use: 'Favicon (standard)' },
  { size: 48, label: '48×48', use: 'Desktop shortcut' },
  { size: 64, label: '64×64', use: 'Desktop shortcut' },
  { size: 128, label: '128×128', use: 'Chrome Web Store' },
  { size: 180, label: '180×180', use: 'Apple Touch Icon' },
  { size: 192, label: '192×192', use: 'Android Chrome' },
  { size: 512, label: '512×512', use: 'PWA / Splash' },
];