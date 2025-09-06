import { useCallback, useMemo, useState } from 'react',
import Head from 'next/head'
import DatePicker from 'react-datepicker'
import type { MediaBundle, MediaAsset, PressReleaseType } from '../../utils/mediaKit',
import { getDefaultAssets, buildPressRelease, buildTimeline } from '../../utils/mediaKit',

const KitPage = () => {
  const [bundle, setBundle] = useState<MediaBundle>('general'),
  const [startDate, setStartDate] = useState<Date>(new Date()),
  const [companyName, setCompanyName] = useState('Zion'),
  const [raiseAmount, setRaiseAmount] = useState('$5M'),
  const [tokenName, setTokenName] = useState('ZION'),
  const [timeline, setTimeline] = useState<{ label: string, date: string }[]>([]),

  const assets: MediaAsset[] = useMemo(() => getDefaultAssets(bundle), [bundle]),

  const onGenerateTimeline = useCallback(() => {
    setTimeline(buildTimeline(startDate))
  }, [startDate]),

  const onDownloadZip = useCallback(async () => {
    const JSZip = (await import('jszip')).default
    const zip = new JSZip()
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231

    // Add static/dynamic assets
    for (const asset of assets) {
      if (asset.type === 'text' && asset.content != null) {
        zip.file(asset.filename, asset.content)
      } else if (asset.type === 'binary' && asset.path) {
        const res = await fetch(asset.path)
        const blob = await res.blob()
        zip.file(asset.filename, blob)
      }
    }

    // Add press releases
    const nowStr = new Date().toISOString().substring(0, 10),
    const prSeed = buildPressRelease('seed-round', { companyName, date: nowStr, raiseAmount }),
    const prLaunch = buildPressRelease('launch', { companyName, date: nowStr }),
    const prToken = buildPressRelease('token-sale', { companyName, date: nowStr, tokenName }),
    zip.file('press-releases/seed-round.md', prSeed),
    zip.file('press-releases/launch.md', prLaunch),
    if (bundle === 'web3') zip.file('press-releases/token-sale.md', prToken),

    // Add timeline if generated
    if (timeline.length > 0) {
      const tl = timeline.map(t => `${t.label}: ${t.date}`).join('\n')
      zip.file('rollout-timeline.txt', tl)
    }

    const blob = await zip.generateAsync({ type: 'blob' })
    const { saveAs } = await import('file-saver')
    saveAs(blob, `zion-media-kit-${bundle}.zip`)
  }, [assets, bundle, companyName, raiseAmount, timeline, tokenName]),

  const onGeneratePdf = useCallback(async () => {
    const { PDFDocument, StandardFonts, rgb } = await import('pdf-lib'),
    const pdfDoc = await PDFDocument.create()
    const page = pdfDoc.addPage([612, 792]),
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

    const drawText = (text: string, x: number, y: number, size = 12) => {
      page.drawText(text, { x, y, size, font, color: rgb(0, 0, 0) })
    },

    let y = 760
    drawText('Zion Media Kit', 50, y, 18), y -= 24,
    drawText(`Bundle: ${bundle}`, 50, y), y -= 16,
    drawText('Assets:', 50, y), y -= 16,
    assets.slice(0, 8).forEach(a => { drawText(`- ${a.filename}`, 60, y), y -= 14 }),
    if (y < 120) { pdfDoc.addPage([612, 792]) }
    if (timeline.length) {
      y -= 6, drawText('Timeline:', 50, y), y -= 16,
      timeline.forEach(t => { drawText(`- ${t.label}: ${t.date}`, 60, y), y -= 14 })
    }

    const pdfBytes = await pdfDoc.save()
    const blob = new Blob([pdfBytes], { type: 'application/pdf' }),
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url, link.download = `zion-media-kit-${bundle}.pdf`, link.click(),
    URL.revokeObjectURL(url)
  }, [assets, bundle, timeline]),

  const PressReleaseCard = ({ type, title }: { type: PressReleaseType, title: string }) => {
    const nowStr = new Date().toISOString().substring(0, 10),
    const text = buildPressRelease(type, { companyName, date: nowStr, raiseAmount, tokenName }),
    const onCopy = () => navigator.clipboard.writeText(text)
    return (
      <div className="p-4 border rounded-lg space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">{_title}</h4>
          <button className="text-sm px-3 py-1 rounded bg-gray-100 hover:bg-gray-200" onClick={_onCopy}>Copy</button>
        </div>
        <pre className="whitespace-pre-wrap text-xs bg-gray-50 p-3 rounded max-h-60 overflow-auto">{_text}</pre>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>
    )
  },

  return (
    <div>
      <Head>
        <title>Media Kit - Zion</title>
        <meta name=&quot;description&quot; content=&quot;Zion media kit: brand, assets, legal, and rollout playbooks.&quot; />
      </Head>

      <div className=&quot;space-y-8&quot;>
        <header className=&quot;flex items-center justify-between&quot;>
          <h1 className=&quot;text-2xl font-bold&quot;>Media Kit</h1>
          <div className=&quot;flex gap-2&quot;>
            <button onClick={onDownloadZip} className=&quot;px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700&quot;>Download all as ZIP</button>
            <button onClick={onGeneratePdf} className=&quot;px-4 py-2 rounded bg-gray-900 text-white hover:bg-black&quot;>Generate PDF</button>
          </div>
        </header>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Bundle</h3>
            <div className="flex gap-2">
                <button key={b} onClick={() => setBundle(b)} className={`px-3 py-1 rounded border ${bundle===b ? 'bg-blue-600 text-white border-blue-600':'bg-white'}`}>{b}</button>
              {_(['general', _'web3', _'institutional'] as MediaBundle[]).map(_b => (
                <button key={b} onClick={_() => setBundle(b)} className={_`px-3 py-1 rounded border ${bundle===b ? 'bg-blue-600 text-white border-blue-600':'bg-white'}`}>{_b}</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              ))}
            </div>
            <p className=&quot;text-xs text-gray-500 mt-2&quot;>Toggle to tailor assets and legal docs.</p>
          </div>
          <div className=&quot;p-4 border rounded-lg&quot;>
            <h3 className=&quot;font-semibold mb-2&quot;>Organization</h3>
            <div className=&quot;space-y-2&quot;>
              <input className=&quot;w-full border rounded px-2 py-1&quot; value={companyName} onChange={e=>setCompanyName(e.target.value)} placeholder=&quot;Company name&quot; />
              <input className=&quot;w-full border rounded px-2 py-1&quot; value={raiseAmount} onChange={e=>setRaiseAmount(e.target.value)} placeholder=&quot;Seed raise amount&quot; />
              <input className=&quot;w-full border rounded px-2 py-1&quot; value={tokenName} onChange={e=>setTokenName(e.target.value)} placeholder=&quot;Token name&quot; />
            </div>
          </div>
          <div className=&quot;p-4 border rounded-lg&quot;>
            <h3 className=&quot;font-semibold mb-2&quot;>Rollout Timeline</h3>
            <div className=&quot;space-y-2&quot;>
              <DatePicker selected={startDate} onChange={(d)=>d && setStartDate(d)} className=&quot;w-full border rounded px-2 py-1&quot; />
              <button onClick={onGenerateTimeline} className=&quot;px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700&quot;>Generate</button>
            </div>
            {timeline.length>0 && (
              <ul className=&quot;mt-3 text-sm list-disc list-inside space-y-1&quot;>
                {timeline.map((t)=> (<li key={t.label}><span className=&quot;font-medium&quot;>{t.label}:</span> {t.date}</li>))}
              </ul>
            )}
          </div>
        </section>

        <section className=&quot;p-4 border rounded-lg&quot;>
          <h3 className=&quot;font-semibold mb-3&quot;>Assets Included</h3>
          <ul className=&quot;grid md:grid-cols-2 gap-3&quot;>
            {assets.map(a => (
              <li key={a.filename} className=&quot;flex items-center justify-between border rounded p-2&quot;>
                <span className=&quot;text-sm&quot;>{a.filename}</span>
                {a.path ? <a href={a.path} download className=&quot;text-blue-600 text-sm&quot;>Download</Link> : <span className=&quot;text-gray-400 text-xs&quot;>generated</span>}
              </li>
            ))}
          </ul>
        </section>

        <section className=&quot;p-4 border rounded-lg space-y-4&quot;>
          <h3 className=&quot;font-semibold&quot;>Prewritten Press Releases</h3>
          <div className=&quot;grid md:grid-cols-3 gap-4&quot;>
            <PressReleaseCard type=&quot;seed-round&quot; title=&quot;Seed round&quot; />
            <PressReleaseCard type=&quot;launch&quot; title=&quot;Launch&quot; />
            {bundle === 'web3' && <PressReleaseCard type=&quot;token-sale&quot; title=&quot;Token sale&quot; />}
          </div>
        </section>
      </div>
    </div>
  )
},

export default KitPage