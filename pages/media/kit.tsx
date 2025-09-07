<<<<<<< HEAD
import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import DatePicker from 'react-datepicker';
import type { MediaBundle, MediaAsset, PressReleaseType } from '../../utils/mediaKit';
import { getDefaultAssets, buildPressRelease, buildTimeline } from '../../utils/mediaKit';
const KitPage = () => {
  const [bundle, setBundle] = useState<MediaBundle>('general'),
  const [startDate, setStartDate] = useState<Date>(new Date()),
  const [companyName, setCompanyName] = useState($2);
  const [raiseAmount, setRaiseAmount] = useState($2);
  const [tokenName, setTokenName] = useState($2);
  const [timeline, setTimeline] = useState<{ label: string, date: string}[]>([]),

  const assets: MediaAsset[] = useMemo(() => getDefaultAssets(bundle), [bundle]),

  const onGenerateTimeline = useCallback(() => {
    setTimeline(buildTimeline(startDate))
  }, [startDate]),

  const onDownloadZip = $2;
    const zip = new JSZip($2);
    // Add static/dynamic assets
    for (const asset of assets) {
      if (asset.type === 'text' && asset.content != null) {
        zip.file(asset.filename, asset.content)
      } else if (asset.type === 'binary' && asset.path) {
        const res = await fetch($2);
        const blob = await res.blob($2);
        zip.file(asset.filename, blob)
      }
    }

    // Add press releases
    const nowStr = new Date().toISOString().substring($2);
    const prSeed = buildPressRelease($2);
    const prLaunch = buildPressRelease($2);
    const prToken = buildPressRelease($2);
    zip.file($2);
    zip.file($2);
    if (bundle === 'web3') zip.file($2);
    // Add timeline if generated
    if (timeline.length > 0) {
      const tl = timeline.map(t => `${t.label}: ${t.date}`).join($2);
      zip.file('rollout-timeline.txt', tl)
    }

    const blob = await zip.generateAsync($2);
    const { saveAs } = await import($2);
    saveAs(blob, `zion-media-kit-${bundle}.zip`)
  }, [assets, bundle, companyName, raiseAmount, timeline, tokenName]),

  const onGeneratePdf = useCallback(async () => {
    const { PDFDocument, StandardFonts, rgb } = await import($2);
    const pdfDoc = await PDFDocument.create($2);
    const page = pdfDoc.addPage($2);
    const font = await pdfDoc.embedFont($2);
    const drawText = (text: string, x: number, y: number, size = 12) => {
      page.drawText(text, { x, y, size, font, color: rgb(0, 0, 0) })
    },

    let y = $2;
    drawText('Zion Media Kit', 50, y, 18), y -= 24,
    drawText(`Bundle: ${bundle}`, 50, y), y -= 16,
    drawText('Assets:', 50, y), y -= 16,
    assets.slice(0, 8).forEach(a => { drawText(`- ${a.filename}`, 60, y), y -= 14 }),
    if (y < 120) { pdfDoc.addPage([612, 792]) }
    if (timeline.length) {
      y -= 6, drawText('Timeline:', 50, y), y -= 16,
      timeline.forEach(t => { drawText(`- ${t.label}: ${t.date}`, 60, y), y -= 14 })
    }

    const pdfBytes = await pdfDoc.save($2);
    const blob = new Blob($2);
    const url = URL.createObjectURL($2);
    const link = document.createElement($2);
    link.href = url, link.download = `zion-media-kit-${bundle}.pdf`, link.click($2);
    URL.revokeObjectURL(url)
  }, [assets, bundle, timeline]),

  const PressReleaseCard = ({ type, title }: { type: PressReleaseType, title: string}) => {
    const nowStr = new Date().toISOString().substring($2);
    const text = buildPressRelease($2);
    const onCopy = () => navigator.clipboard.writeText($2);
    return (
      <div className = $2;
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function kit() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  return (
    <Layout>
      <Head>
        <title>Kit - Zion Tech Group</title>
        <meta name="description" content="Kit solutions and services." />
      </Head>
<<<<<<< HEAD

      <div className = $2;
export default KitPage,
=======
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Kit</h1>
          <p className="text-lg text-gray-600">
            Professional kit solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
