
import DatePicker from 'react-datepicker';

import type {

} from '../../utils/mediaKit';
const KitPage = () => {

import { useCallback, useMemo, useState } from 'react';
import Head from 'next/head';
import DatePicker from 'react-datepicker';
import type { MediaBundle, MediaAsset, PressReleaseType } from '../../utils/mediaKit';
import { getDefaultAssets, buildPressRelease, buildTimeline } from '../../utils/mediaKit';
const KitPage = () => {;

  const [bundle, setBundle] = useState<MediaBundle>('general');
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [companyName, setCompanyName] = useState('Zion');
  const [raiseAmount, setRaiseAmount] = useState('$5M');
  const [tokenName, setTokenName] = useState('ZION');

    const { PDFDocument, StandardFonts, rgb } = await import('pdf-lib');
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([612, 792]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    drawText('Zion Media Kit', 50, y, 18);
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

  const PressReleaseCard = ({;
    type,;
    title,;
  }: {;
    type: PressReleaseType;
    title: string;

    const text = buildPressRelease(type, {;
      companyName,;
      date: nowStr,;
      raiseAmount,;
      tokenName,;

    });
    const onCopy = () => navigator.clipboard.writeText(text);

    drawText('Zion Media Kit', 50, y, 18), y -= 24,;
    drawText(`Bundle: ${bundle}`, 50, y), y -= 16,;
    drawText('Assets:', 50, y), y -= 16,;
    assets.slice(0, 8).forEach(a => { drawText(`- ${a.filename}`, 60, y), y -= 14 }),;
    if (y < 120) { pdfDoc.addPage([612, 792])   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    if (timeline.length) {;
      y -= 6, drawText('Timeline:', 50, y), y -= 16,;
      timeline.forEach(t => { drawText(`- ${t.label}: ${t.date}`, 60, y), y -= 14 });
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    const pdfBytes = await pdfDoc.save(),
    const blob = new Blob([pdfBytes], { type: 'application/pdf' }),
    const url = URL.createObjectURL(blob),
    const link = document.createElement('a'),
    link.href = url, link.download = `zion-media-kit-${bundle}.pdf`, link.click(),
    URL.revokeObjectURL(url)
  }, [assets, bundle, timeline]),
  const PressReleaseCard = ({ type, title }: { type: PressReleaseType, title: string }) => {
    const nowStr = new Date().toISOString().substring(0, 10),
    const text = buildPressRelease(type, { companyName, date: nowStr, raiseAmount, tokenName }),
    const onCopy = () => navigator.clipboard.writeText(text),

    return (
      <div className="p-4 border rounded-lg space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">{title}</h4>
          <button className="text-sm px-3 py-1 rounded bg-gray-100 hover:bg-gray-200" onClick={onCopy}>Copy</button>
        </div>
        <pre className="whitespace-pre-wrap text-xs bg-gray-50 p-3 rounded max-h-60 overflow-auto">{text}</pre>
      </div>

  return (
    <div>
      <Head>
        <title>Media Kit - Zion</title>
        <meta name="description" content="Zion media kit: brand, assets, legal, and rollout playbooks." />
      </Head>

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

            {assets.map(a => (
              <li key={a.filename} className="flex items-center justify-between border rounded p-2">
                <span className="text-sm">{a.filename}</span>
                {a.path ? <a href={a.path} download className="text-blue-600 text-sm">Download</a> : <span className="text-gray-400 text-xs">generated</span>}
              </li>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </ul>
        </section>

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
  );

},;

export default KitPage;

