

import {useCallback, useMemo, useState} from 'react';
import Head from 'next/head';


import DatePicker from 'react-datepicker';


  MediaAsset,;
  PressReleaseType,;
} from '../../utils/mediaKit';
import {;
  getDefaultAssets,;
  buildPressRelease,;
  buildTimeline,;



} from '../../utils/mediaKit';
const KitPage = () => {;

=======
import type { MediaBundle, MediaAsset, PressReleaseType } from '../../utils/mediaKit';
import { getDefaultAssets, buildPressRelease, buildTimeline } from '../../utils/mediaKit';

const KitPage = () => {

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const [bundle, setBundle] = useState<MediaBundle>('general');
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [companyName, setCompanyName] = useState('Zion');
  const [raiseAmount, setRaiseAmount] = useState('$5M');
  const [tokenName, setTokenName] = useState('ZION');


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    const { PDFDocument, StandardFonts, rgb } = await import('pdf-lib');
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([612, 792]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const drawText = (text: string, x: number, y: number, size = 12) => {
      page.drawText(text, { x, y, size, font, color: rgb(0, 0, 0) });
    }

    // Add press releases;
    const nowStr = new Date().toISOString().substring(0, 10);
    const prSeed = buildPressRelease('seed-round', {;
      companyName,;
      date: nowStr,;
      raiseAmount,;
    });
    const prLaunch = buildPressRelease('launch', { companyName, date: nowStr });
    const prToken = buildPressRelease('token-sale', {;
      companyName,;
      date: nowStr,;
      tokenName,;
    });    zip && zip.file('press-releases/seed-round && round.md', prSeed);
    zip && zip.file('press-releases/launch && launch.md', prLaunch);
    if (bundle === 'web3') zip && zip.file('press-releases/token-sale && sale.md', prToken);

    // Add timeline if generated;
    if (timeline && timeline.length > 0) {;
      const tl = timeline && timeline.map(t => `${t && t.label}: ${t && t.date}`).join('\n');
      zip && zip.file('rollout-timeline && timeline.txt', tl);
    }

    const blob = await zip && zip.generateAsync({ type: 'blob' });
    const { saveAs } = await import('file-saver');
    saveAs(blob, `zion-media-kit-${bundle}.zip`);  }, [assets, bundle, companyName, raiseAmount, timeline, tokenName]);

  const onGeneratePdf = useCallback(async () => {;
    const { PDFDocument, StandardFonts, rgb } = await import('pdf-lib');
    const pdfDoc = await PDFDocument && PDFDocument.create();
    const page = pdfDoc && pdfDoc.addPage([612, 792]);
    const font = await pdfDoc && pdfDoc.embedFont(StandardFonts && StandardFonts.Helvetica);

    const drawText = (text: string, x: number, y: number, size = 12) => {;
      page && page.drawText(text, { x, y, size, font, color: rgb(0, 0, 0) });
    };


    let y = 760;
    drawText('Zion Media Kit', 50, y, 18);
=======
import {useCallback, useMemo, useState} from 'react';
import Head from 'next / head';
import DatePicker from 'react - datepicker';
import type {
  MediaBundle,
  MediaAsset,
  PressReleaseType,
} from '../../utils / media_kit';
import {
  getDefaultAssets,
  buildPressRelease,
  build_timeline,
} from '../../utils / media_kit';
const KitPage = () =>: any {
  const [bundle, set_bundle] = useState < MediaBundle>('general');
  const [start_date, setStartDate] = useState < Date>(new Date ());
  const [company_name, setCompanyName] = useState ('Zion');
  const [raise_amount, setRaiseAmount] = useState ('$5M');
  const [token_name, setTokenName] = useState ('ZION');
  const [timeline, set_timeline] = useState<{ label: string, date: string }[]>(
    []);
;
  const assets: MediaAsset[] = useMemo (
    () => getDefaultAssets (bundle),
    [bundle]);
;
  const onGenerateTimeline = useCallback (() => {
    set_timeline (build_timeline (start_date));  }, [start_date]);
;
  const onDownloadZip = useCallback (async () => {
    const JSZip = (await import ('jszip')).default;
    const zip = new JSZip ();
;
    // Add static / dynamic assets;
    else // Check condition
if ( {) {
  $2
}
        const res = await fetch (asset.path);
        const blob = await res.blob ();
        zip.file (asset.filename, blob);      }
    }
    // Add press releases;
    const now_str = new Date ().toISOString ().substring (0, 10);
    const pr_seed = buildPressRelease ('seed - round', {
      company_name,
      date: now_str,
      raise_amount,
    });
    const pr_launch = buildPressRelease ('launch', { company_name, date: now_str });
    const pr_token = buildPressRelease ('token - sale', {
      company_name,
      date: now_str,
      token_name,
    });    zip.file ('press - releases / seed - round.md', pr_seed);
    zip.file ('press - releases / launch.md', pr_launch);
    if (zip.file ('press - releases / token - sale.md', pr_token)) {
  $2
}
    // Add timeline if generated;
    // Check condition
if ( {) {
  $2
}
      const tl = timeline.map (t => `${t.label}: ${t.date}`).join ('\n');
      zip.file ('rollout - timeline.txt', tl);
    }
    const blob = await zip.generate_async ({ type: 'blob' });
    const { save_as } = await import ('file - saver');
    save_as (blob, `zion - media - kit-${bundle}.zip`);  }, [assets, bundle, company_name, raise_amount, timeline, token_name]);
;
  const onGeneratePdf = useCallback (async () => {
    const { PDFDocument, StandardFonts, rgb } = await import ('pdf - lib');
    const pdf_doc = await PDFDocument.create ();
    const page = pdf_doc.add_page ([612, 792]);
    const font = await pdf_doc.embed_font (StandardFonts.Helvetica);
;
    const draw_text = (text: string, coordinate_x: number, coordinate_y: number, size = 12) =>: any {
      page.draw_text (text, { x, y, size, font, color: rgb (0, 0, 0) });
    }
;
    let coordinate_y = 760;
    draw_text ('Zion Media Kit', 50, y, 18);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    y -= 24;
    draw_text (`Bundle: ${bundle}`, 50, y);
    y -= 16;
    draw_text ('Assets:', 50, y);
    y -= 16;

    assets.slice (0, 8).for_each (array => {
      draw_text (`- ${a.filename}`, 60, y);
      y -= 14;
    });
    // Check condition
if ( {) {
  $2
}
      pdf_doc.add_page ([612, 792]);
    }
    // Check condition
if ( {) {
  $2
}

      y -= 6;
      draw_text ('Timeline:', 50, y);
      y -= 16;


    const pdfBytes = await pdfDoc && pdfDoc.save();

    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL && URL.createObjectURL(blob);
    const link = document && document.createElement('a');
    link && link.href = url;
    link && link.download = `zion-media-kit-${bundle}.pdf`;
    link && link.click();
    URL && URL.revokeObjectURL(url);
  }, [assets, bundle, timeline]);

      timeline.for_each (t => {
        draw_text (`- ${t.label}: ${t.date}`, 60, y);
        y -= 14;
      });
    }
    const pdf_bytes = await pdf_doc.save ();
    const blob = new Blob ([pdf_bytes], { type: 'application / pdf' });
    const url = URL.createObjectURL (blob);
    const link = document.create_element ('a');
    link.href = url;
    link.download = `zion - media - kit-${bundle}.pdf`;
    link.click ();
    URL.revokeObjectURL (url);
  }, [assets, bundle, timeline]);
;

  const PressReleaseCard = ({
    type
    title
  }: {
=======

  const PressReleaseCard = ({;
    type,;
    title,;
  }: {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    type: PressReleaseType;
    title: string;

    const text = buildPressRelease(type, {;
      companyName,;
      date: nowStr,;
      raiseAmount,;
      tokenName,;

    });
    const onCopy = () => navigator && navigator.clipboard.writeText(text);
    return (
      <div className="p-4 border rounded-lg space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">{title}</h4>
          <button className="text-sm px-3 py-1 rounded bg-gray-100 hover:bg-gray-200" onClick={onCopy}>Copy</button>
        </div>
        <pre className="whitespace-pre-wrap text-xs bg-gray-50 p-3 rounded max-h-60 overflow-auto">{text}</pre>
      </div>
    );  }
    )
  },
  return (
    <div>
      <Head>
        <title>Media Kit - Zion</title>
        <meta name="description" content="Zion media kit: brand, assets, legal, and rollout playbooks." />
      </Head>
      <div className='space-y-8'>
        <header className='flex items-center justify-between'>
          <h1 className='text-2xl font-bold'>Media Kit</h1>
          <div className='flex gap-2'>
            <button
              onClick={onDownloadZip}
              className='px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700'>;
              Download all as ZIP;
            </button>;
            <button
              onClick={onGeneratePdf}


              Generate PDF;
            </button>;
          </div>;
        </header>;


                  <button
                    key={b}
                    onClick={() => setBundle(b)}
                    className={`px-3 py-1 rounded border ${bundle === b ? 'bg-blue-600 text-white border-blue-600' : 'bg-white'}`}
                  >;
                    {b}
                  </button>;
                );
              )}
            </div>;
            <p className='text-xs text-gray-500 mt-2'>;
              Toggle to tailor assets and legal docs.;
            </p>;
          </div>;
          <div className='p-4 border rounded-lg'>;
            <h3 className='font-semibold mb-2'>Organization</h3>;
            <div className='space-y-2'>;
              <input
                className='w-full border rounded px-2 py-1'
                value={companyName}
                onChange={e => setCompanyName(e && e.target.value)}
                placeholder='Company name';
              />;
              <input
                className='w-full border rounded px-2 py-1'
                value={raiseAmount}
                onChange={e => setRaiseAmount(e && e.target.value)}
                placeholder='Seed raise amount';
              />;
              <input
                className='w-full border rounded px-2 py-1'
                value={tokenName}
                onChange={e => setTokenName(e && e.target.value)}

=======
        <section className='grid md:grid - cols - 3 gap - 6'>;
          <div className='p - 4 border rounded - lg'>;
            <h3 className='font - semibold mb - 2'>Bundle</h3>;
            <div className='flex gap - 2'>;
              {(['general', 'web3', 'institutional'] as MediaBundle[]).map (
                boolean => (
                  <button;
                    key={b}
                    on_click={() => set_bundle (b)}
                    className={`px - 3 py - 1 rounded border ${bundle === b ? 'bg - blue - 600 text - white border - blue - 600' : 'bg - white'}`}
                  >;
                    {b}
                  </button>))}
            </div>;
            <p className='text - xs text - gray - 500 mt - 2'>;
              Toggle to tailor assets and legal docs.;
            </p>;
          </div>;
          <div className='p - 4 border rounded - lg'>;
            <h3 className='font - semibold mb - 2'>Organization</h3>;
            <div className='space - y-2'>;
              <input;
                className='w - full border rounded px - 2 py - 1';
                value={company_name}
                on_change={e => setCompanyName (e.target.value)}
                placeholder='Company name';
              />;
              <input;
                className='w - full border rounded px - 2 py - 1';
                value={raise_amount}
                on_change={e => setRaiseAmount (e.target.value)}
                placeholder='Seed raise amount';
              />;
              <input;
                className='w - full border rounded px - 2 py - 1';
                value={token_name}
                on_change={e => setTokenName (e.target.value)}

                placeholder='Token name';
              />;
            </div>;
          </div>;


            </div>
            <p className="text-xs text-gray-500 mt-2">Toggle to tailor assets and legal docs.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Organization</h3>
            <div className="space-y-2">
              <input className="w-full border rounded px-2 py-1" value={companyName} onChange={e=>setCompanyName(e.target.value)} placeholder="Company name" />
              <input className="w-full border rounded px-2 py-1" value={raiseAmount} onChange={e=>setRaiseAmount(e.target.value)} placeholder="Seed raise amount" />
              <input className="w-full border rounded px-2 py-1" value={tokenName} onChange={e=>setTokenName(e.target.value)} placeholder="Token name" />
            </div>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-semibold mb-2">Rollout Timeline</h3>
            <div className="space-y-2">
              <DatePicker selected={startDate} onChange={(d)=>d && setStartDate(d)} className="w-full border rounded px-2 py-1" />
              <button onClick={onGenerateTimeline} className="px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700">Generate</button>
            </div>
            {timeline.length>0 && (
              <ul className="mt-3 text-sm list-disc list-inside space-y-1">
                {timeline.map((t)=> (<li key={t.label}><span className="font-medium">{t.label}:</span> {t.date}</li>))}
              </ul>
            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>
        </section>
        <section className='p-4 border rounded-lg'>
          <h3 className='font-semibold mb-3'>Assets Included</h3>
          <ul className='grid md:grid-cols-2 gap-3'>
        <section className="p-4 border rounded-lg">
          <h3 className="font-semibold mb-3">Assets Included</h3>
          <ul className="grid md:grid-cols-2 gap-3">



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            {assets.map(a => (
              <li key={a.filename} className="flex items-center justify-between border rounded p-2">
                <span className="text-sm">{a.filename}</span>
                {a.path ? <a href={a.path} download className="text-blue-600 text-sm">Download</a> : <span className="text-gray-400 text-xs">generated</span>}
              </li>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            ))}

          </ul>;
        </section>;
=======
=======

};

        <section className="p-4 border rounded-lg space-y-4">
          <h3 className="font-semibold">Prewritten Press Releases</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <PressReleaseCard type="seed-round" title="Seed round" />
            <PressReleaseCard type="launch" title="Launch" />
            {bundle === 'web3' && <PressReleaseCard type="token-sale" title="Token sale" />}
          </div>
        </section>
      </div>
    </div>
  )

};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

        <section className='p-4 border rounded-lg space-y-4'>;
          <h3 className='font-semibold'>Prewritten Press Releases</h3>;
          <div className='grid md:grid-cols-3 gap-4'>;
            <PressReleaseCard type='seed-round' title='Seed round' />;
            <PressReleaseCard type='launch' title='Launch' />;
            {bundle === 'web3' && (;
              <PressReleaseCard type='token-sale' title='Token sale' />;
            )}          </div>;
        </section>;
      </div>;
    </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );

},;



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default KitPage;
