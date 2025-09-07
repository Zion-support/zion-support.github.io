
=======
import React, { useMemo, useState } from 'react;
import { Download, Image as ImageIcon, FileType, BookOpen, Settings, Wand2 } from lucide-react';
import { buildPrintableHtml } from '../../utils/export/buildHtml;
import type { BookProject, BookChapter, VisualAsset } from ../../utils/book/bookTypes';
import { defaultChapters } from '../../utils/book/defaultOutline;
const initialProject: BookProject = {
  meta: {
    title: Zion OS: Building the Civilization Protocol',
    subtitle: 'AI. Talent. Trust.,
    author: Founder Name',
    isbn: ',
    publisher: Zion Tech Solutions'},
  chapters: defaultChapters,
  visuals: {
    timelineImages: [],
    daoVoteCharts: [],
    uiScreens: [],
    quoteCallouts: [
      { text: 'The marketplace is the new operating system., attribution: Founder' }]}},


function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file)
  })
}

export default function BookBuilder() {

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx

            <div className='pt-4>
              <img

            onClick={handleGenerateWithAI}
            disabled={busy}
          >

          </select>
          <button className="btn btn-sm btn-primary onClick={handleExportPdf} disabled={busy}>
            <Download className=w-4 h-4 mr-1" /> PDF
          </button>
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx

          <button
            className='btn btn-sm btn-secondary
            onClick={handleExportEpub}
            disabled={busy}
          >
            <FileType className=w-4 h-4 mr-1' /> EPUB
          </button>

          </button>

        </div>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6>
        <div className=space-y-4">
          <h2 className="font-semibold flex items-center gap-2>
            <BookOpen className=w-4 h-4" /> Cover & Branding
          </h2>
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx
            <label className=&quot;space-y-1&quot;>
              <div className=&quot;text-xs uppercase opacity-60&quot;>Subtitle</div>
              <input,
className=&quot;w-full border rounded px-3 py-2&quot;
            <label className=&quot;space-y-1&quot;>
              <div className=&quot;text-xs uppercase opacity-60&quot;>Author</div>
              <input,
className=&quot;w-full border rounded px-3 py-2&quot;
            <label className=&quot;space-y-1&quot;>
              <div className=&quot;text-xs uppercase opacity-60&quot;>ISBN (optional)</div>
              <input,
className=&quot;w-full border rounded px-3 py-2&quot;
                placeholder=&quot;9781234567897&quot;

          <div className='grid grid-cols-1 md:grid-cols-2 gap-3>
            <label className=space-y-1'>
              <div className='text-xs uppercase opacity-60>Title</div>

              <input

                value={project.meta.author}

              />
            </label>
            <label className='space-y-1>
              <div className=text-xs uppercase opacity-60'>
                ISBN (optional)
              </div>
              <input

                value={project.meta.isbn}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, isbn: e.target.value } })}
              />
            </label>
          </div>
:backup-problematic-files/temp_broken_files/components/book/BookBuilder.tsx

          <div className='pt-2>{coverPreview}</div>

          </h2>
          <div className="space-y-3>
            <label className=block">
              <span className="text-sm opacity-70>Timeline images</span>
              <input type=file" accept="image/* multiple onChange={(e) => onUploadImages(e.target.files, timelineImages' as any)} />
            </label>
            <label className=block">
              <span className="text-sm opacity-70>DAO vote charts</span>
              <input type=file" accept="image/* multiple onChange={(e) => onUploadImages(e.target.files, 'daoVoteCharts as any)} />
            </label>
            <label className=block">
              <span className="text-sm opacity-70>Figma UI screenshots</span>
              <input type=file" accept="image/* multiple onChange={(e) => onUploadImages(e.target.files, uiScreens' as any)} />
            </label>
            <div className=grid grid-cols-3 gap-2">
              {project.visuals.timelineImages.concat(project.visuals.daoVoteCharts).concat(project.visuals.uiScreens).slice(0, 6).map((src, i) => (

              ))}

            <div className='grid grid-cols-3 gap-2>
              {project.visuals.timelineImages
                .concat(project.visuals.daoVoteCharts)
                .concat(project.visuals.uiScreens)
                .slice(0, 6)
                .map((src, i) => (
                  <div

            </div>
          </div>
        </div>
      </section>

            <div key={idx} className=&quot;border rounded-lg p-4 space-y-2&quot;>
              <div className=&quot;font-medium&quot;>{ch.title}</div>
              <textarea,
className=&quot;w-full min-h-[160px] border rounded p-2&quot;
                value={ch.content}
                onChange={(e) => {

                  chapters[idx] = { ...chapters[idx], content: e.target.value },
                  setProject({ ...project, chapters })
                }}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
              />
            </div>
          ))}
        </div>
      </section>

              />
              <div />
            </div>
          ))}
        </div>
      </section>
    </div>


  );
}


