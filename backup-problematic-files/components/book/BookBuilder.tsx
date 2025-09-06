import React, { useMemo, useState } from 'react'
import { Download, Image as ImageIcon, FileType, BookOpen, Settings, Wand2 } from 'lucide-react'
import { buildPrintableHtml } from '../../utils/export/
import type { BookProject, BookChapter, VisualAsset } from '../../utils/book/
import { defaultChapters } from '../../utils/book/