



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




  const [bundle, setBundle] = useState<MediaBundle>('general');
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [companyName, setCompanyName] = useState('Zion');
  const [raiseAmount, setRaiseAmount] = useState('$5M');
  const [tokenName, setTokenName] = useState('ZION');





    const { PDFDocument, StandardFonts, rgb } = await import('pdf-lib');
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([612, 792]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);




  const assets: MediaAsset[] = useMemo(;
    () => getDefaultAssets(bundle),;
    [bundle];
  );
  const onGenerateTimeline = useCallback(() => {;
    setTimeline(buildTimeline(startDate));  }, [startDate]);
  const onDownloadZip = useCallback(async () => {;
    const JSZip = (await import('jszip')).default;
    const zip = new JSZip();
    // Add static/dynamic assets;
     else if (asset && asset.type === 'binary' && asset && asset.path) {;
        const res = await fetch(asset && asset.path);
        const blob = await res && res.blob();
        zip && zip.file(asset && asset.filename, blob);      }
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


            )}


          </div>;
        </section>;
        <section className='p-4 border rounded-lg'>;
          <h3 className='font-semibold mb-3'>Assets Included</h3>;
          <ul className='grid md:grid-cols-2 gap-3'>;
            {assets && assets.map(a => (;



              <li
                key={a && a.filename}
                className='flex items-center justify-between border rounded p-2'>;
                <span className='text-sm'>{a && a.filename}</span>;
                {a && a.path ? (;
                  <a href={a && a.path} download className='text-blue-600 text-sm'>;
                    Download;
                  </a>;
                ) : (;
                  <span className='text-gray-400 text-xs'>generated</span>;
                )}              </li>;




            ))}

          </ul>;
        </section>;

};






        <section className="p-4 border rounded-lg space-y-4">
          <h3 className="font-semibold">Prewritten Press Releases</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <PressReleaseCard type="seed-round" title="Seed round" />
            <PressReleaseCard type="launch" title="Launch" />
            {bundle === 'web3' && <PressReleaseCard type="token-sale" title="Token sale" />}
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
                {timeline.map((t)=> (<li key={t.label}><span className="font-medium">{t.label}:</span> {t.date}</li>))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
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
            {assets.map(a => (
              <li key={a.filename} className="flex items-center justify-between border rounded p-2">
                <span className="text-sm">{a.filename}</span>
                {a.path ? <a href={a.path} download className="text-blue-600 text-sm">Download</Link> : <span className="text-gray-400 text-xs">generated</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </li>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </ul>
        </section>
        <section className='p-4 border rounded-lg space-y-4'>
          <h3 className='font-semibold'>Prewritten Press Releases</h3>
          <div className='grid md:grid-cols-3 gap-4'>
            <PressReleaseCard type='seed-round' title='Seed round' />
            <PressReleaseCard type='launch' title='Launch' />
            {bundle === 'web3' && (
              <PressReleaseCard type='token-sale' title='Token sale' />
            )}          </div>
        </section>
      </div>
    </div>
  );


},;




export default KitPage;




