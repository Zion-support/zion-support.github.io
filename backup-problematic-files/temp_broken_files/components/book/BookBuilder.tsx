import React, { useMemo, useState } from 'react';

import { Download, Image as ImageIcon, FileType, BookOpen, Settings, Wand2 } from 'lucide-react';
import { buildPrintableHtml } from '../../utils/export/buildHtml';
import type { BookProject, BookChapter, VisualAsset } from '../../utils/book/bookTypes';
import { defaultChapters } from '../../utils/book/defaultOutline';
const initialProject: BookProject = {
  meta: {
    title: 'Zion OS: Building the Civilization Protocol'
    subtitle: 'AI. Talent. Trust.'
    author: 'Founder Name'
    isbn: ''
    publisher: 'Zion Tech Solutions'}
  chapters: defaultChapters
  visuals: {
    timelineImages: []
    daoVoteCharts: []
    uiScreens: []
    quoteCallouts: [
      { text: 'The marketplace is the new operating system.', attribution: 'Founder' }]}}
function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
export default function BookBuilder() {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const [project, setProject] = useState<BookProject>(initialProject),
  const [pageSize, setPageSize] = useState<'A4' | 'LETTER'>('LETTER'),
  const [busy, setBusy] = useState<boolean>(false),
  const coverPreview = useMemo_(() => {
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            <label className=&quot;space-y-1&quot;>
              <div className=&quot;text-xs uppercase opacity-60&quot;>Subtitle</div>
              <input,
className=&quot;w-full border rounded px-3 py-2&quot;                value={project.meta.subtitle}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, subtitle: e.target.value } })}              />
            </label>
            <label className=&quot;space-y-1&quot;>
              <div className=&quot;text-xs uppercase opacity-60&quot;>Author</div>
              <input,
className=&quot;w-full border rounded px-3 py-2&quot;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                value={project.meta.author}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, author: e.target.value } })}              />
            </label>
            <label className=&quot;space-y-1&quot;>
              <div className=&quot;text-xs uppercase opacity-60&quot;>ISBN (optional)</div>
              <input,
className=&quot;w-full border rounded px-3 py-2&quot;
                placeholder=&quot;9781234567897&quot;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4                value={project.meta.isbn}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, isbn: e.target.value } })}
              />
            </label>
          </div>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <div className=&quot;pt-2&quot;>{coverPreview}</div>        </div>

        <div className=&quot;space-y-4&quot;>
          <h2 className=&quot;font-semibold flex items-center gap-2&quot;>
            <Settings className=&quot;w-4 h-4&quot; /> Visual Elements
=======            <div key={idx} className=&quot;border rounded-lg p-4 space-y-2&quot;>
              <div className=&quot;font-medium&quot;>{ch.title}</div>
              <textarea,
className=&quot;w-full min-h-[160px] border rounded p-2&quot;                value={ch.content}
                onChange={(e) => {
                  const chapters: BookChapter[] = [...project.chapters],
                  chapters[idx] = { ...chapters[idx], content: e.target.value },
                  setProject({ ...project, chapters })                }}
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
              />
            </div>
          ))}
        </div>
      </section>
      <section className="space-y-2">
        <h2 className="font-semibold">Quote Callouts</h2>
        <div className="space-y-2">
          {project.visuals.quoteCallouts.map((q, i) => (
            <div key={i} className=&quot;grid grid-cols-1 md:grid-cols-3 gap-2&quot;>
              <input,
className=&quot;border rounded px-2 py-1&quot;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                value={q.text}
                onChange={(e) => {
                  const quoteCallouts = [...project.visuals.quoteCallouts]
                  quoteCallouts[i] = { ...quoteCallouts[i], text: e.target.value }
                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })
                }}
              />
                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })
                }}
                placeholder="Attribution"
=======
              <input,
className=&quot;border rounded px-2 py-1&quot;
              <input,
className=&quot;border rounded px-2 py-1&quot;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4                value={q.attribution ?? ''}
                onChange={(e) => {
                  const quoteCallouts = [...project.visuals.quoteCallouts],
                  quoteCallouts[i] = { ...quoteCallouts[i], attribution: e.target.value },
              />
              <div />
            </div>
          ))}
        </div>
      </section>
    </div>
