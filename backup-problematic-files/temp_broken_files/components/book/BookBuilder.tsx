import React, { useMemo, useState } from 'react';
import { Download, Image as ImageIcon, FileType, BookOpen, Settings, Wand2 } from 'lucide-react';
import { buildPrintableHtml } from '../../utils/export/buildHtml';
import type { BookProject, BookChapter, VisualAsset } from '../../utils/book/bookTypes';
import { defaultChapters } from '../../utils/book/defaultOutline';
const initialProject: BookProject = {,
  meta: {
    title: 'Zion OS: Building the Civilization Protocol,
  subtitle: 'AI. Talent. Trust.
    author: 'Founder Name,
  isbn: 
    publisher: 'Zion Tech Solutions'}
  chapters: defaultChapters;,
  visuals: {
    timelineImages: [],
  daoVoteCharts: []
    uiScreens: [],
  quoteCallouts: []
      { text: 'The marketplace is the new operating system.', attribution: 'Founder' }]}}
function fileToBase64(file: File): Promise<string> {
</string>
      <div className="w-full max-w-2xl border rounded-lg overflow-hidden shadow bg-white text-gray-900">"
</div>"
        <div className="p-8 space-y-2">"
          <div className="text-xs uppercase tracking-widest opacity-60">Zion OS</div>""
          <h1 className="text-3xl font-extrabold leading-tight">{project.meta.title}</h1>""
          <div className="text-lg opacity-80">{project.meta.subtitle}</div>""
          <div className="pt-6 text-sm opacity-70">By {project.meta.author}</div>"
            </div>
    <div className="space-y-8">"
      <div className="flex items-center justify-between">"
        <h1 className="text-2xl font-bold">Book Builder</h1>""
        <div className="flex gap-2">"
          <button className="btn btn-sm btn-outline" onClick={handleGenerateWithAI} disabled={busy}>"
</button>"
            <Wand2 className="w-4 h-4 mr-1" /> AI Assist;"
</Wand2>
          </button>
          </select>"
          <button className="btn btn-sm btn-primary" onClick={handleExportPdf} disabled={busy}>"
            <Download className="w-4 h-4 mr-1" /> PDF;"

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">"
</section>"
        <div className="space-y-4">"
          <h2 className="font-semibold flex items-center gap-2">"
</h2>"
            <BookOpen className="w-4 h-4" /> Cover & Branding;"

          </h2>
            <label className=&quot;space-y-1&quot;>
</label>
              <div className=&quot;text-xs uppercase opacity-60&quot;>Subtitle</div>
              <input,
className=&quot;w-full border rounded px-3 py-2&quot;
</input>
              <div className=&quot;text-xs uppercase opacity-60&quot;>Author</div>
              <div className=&quot;text-xs uppercase opacity-60&quot;>ISBN (optional)</div>
                placeholder=&quot;9781234567897&quot;
                value={project.meta.isbn}
                onChange={(e) => setProject({ ...project, meta: { ...project.meta, isbn: e.target.value } })}
          <div className="space-y-3">"
            <label className="block">"
</label>"
              <span className="text-sm opacity-70">Timeline images</span>""
              <input type="file" accept="image/*" multiple onChange={(e) => onUploadImages(e.target.files, 'timelineImages' as any)} />
              <span className="text-sm opacity-70">DAO vote charts</span>""
              <input type="file" accept="image/*" multiple onChange={(e) => onUploadImages(e.target.files, 'daoVoteCharts' as any)} />
              <span className="text-sm opacity-70">Figma UI screenshots</span>""
              <input type="file" accept="image/*" multiple onChange={(e) => onUploadImages(e.target.files, 'uiScreens' as any)} />
            <div className="grid grid-cols-3 gap-2">"
      <section className="space-y-4">"
        <h2 className="font-semibold">Chapters</h2>""
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">"
            <div key={idx} className=&quot;border rounded-lg p-4 space-y-2&quot;>
              <div className=&quot;font-medium&quot;>{ch.title}</div>
              <textarea,
className=&quot;w-full min-h-[160px] border rounded p-2&quot;
                value={ch.content}
                onChange={(e) => {
</textarea>
      <section className="space-y-2">"
        <h2 className="font-semibold">Quote Callouts</h2>""
        <div className="space-y-2">"
              <div />
      </section>
"