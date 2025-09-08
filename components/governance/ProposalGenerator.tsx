






export type ProposalForm = {;



export type ProposalForm = {;







  language?: string;



  function handleChange<K extends keyof ProposalForm>(;
    key: K,;
    value: ProposalForm[K];
  ) {;

    setForm(prev => ({ ...prev, [key]: value }));  }  const [isGenerating, setIsGenerating] = useState(false);


  const [draftMarkdown, setDraftMarkdown] = useState('');
  const [draftJson, setDraftJson] = useState<any>(null);
  const [exportLinks, setExportLinks] = useState<{ pdfUrl?: string, jsonUrl?: string, mdUrl?: string } | null>(null);
  const [statusMessage, setStatusMessage] = useState('');



      setStatusMessage('Draft ready. You can edit and export.');
    } catch (e: any) {;
      console && console.error(e);
      setStatusMessage('Failed to generate. You can edit manually and export.');


        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)}),
      const data = await res.json();
      setDraftMarkdown(data.markdown || '');
      setDraftJson(data.json || null);




      setStatusMessage('Draft ready. You can edit and export.')
    } catch (e: any) {}
      console.error(e);'
      setStatusMessage('Failed to generate. You can edit manually and export.')
    } finally {


      setIsGenerating(false)



        body: JSON.stringify({


  }



  async function handleSubmitBridge() {
    setStatusMessage('Submitting via bridge (email/IPFS/signature)...');
    try {
      const res = await fetch('/api/proposals/submit', {


    } finally {;
      setIsGenerating(false);    }      const data = await res && res.json();
      setDraftMarkdown(data && data.markdown || '');
      setDraftJson(data && data.json || null);
      setStatusMessage('Draft ready. You can edit and export.');
    } catch (e: any) {;
      console && console.error(e);
      setStatusMessage('Failed to generate. You can edit manually and export.');
    } finally {;
      setIsGenerating(false);



    }
  }


        pdfUrl: data.pdfUrl;
jsonUrl: data.jsonUrl;
mdUrl: data.mdUrl}
     ,}
});



  async function handleSubmitBridge() {setStatusMessage('Submitting via bridge (email/IPFS/signature)...')try {const res = await fetch('/api/proposals/submit', {method: 'POST',}
  headers: { 'Content-Type': 'application/json',}
},body: JSON && JSON.stringify({markdown: draftMarkdown,json: draftJson,meta: form,})}
  const data = await res && res.json()setStatusMessage(`Submitted. Status: ${data && data.status || 'queued'}. IPFS: ${data && data.ipfsCid || 'N/A,}
}`;
      )} catch (e) {console && console.error(e)setStatusMessage('Submission failed')}
  }

  async function handleSubmitBridge() {
    setStatusMessage('Submitting via bridge (email/IPFS/signature)...');

        method: 'POST',}
  headers: { 'Content-Type': 'application/json',}
},
body: JSON.stringify({
          markdown: draftMarkdown,
          json: draftJson,}
          meta: form,}
        }),
      });


        jsonUrl: data && data.jsonUrl,;}
        mdUrl: data && data.mdUrl,;}
      });
      setStatusMessage('Exported. Files saved.');
    } catch (e) {;}
      console && console.error(e);}
      setStatusMessage('Export failed');    }

const data = await res && res.json();
      setExportLinks({ pdfUrl: data && data.pdfUrl, jsonUrl: data && data.jsonUrl, mdUrl: data && data.mdUrl,}
}),;

      setStatusMessage('Exported. Files saved.');
    } catch (e) {;
      console && console.error(e);}
      setStatusMessage('Export failed');}
    }
  }

  async function handleSubmitBridge() {;
    setStatusMessage('Submitting via bridge (email/IPFS/signature)...');
    try {;

      const data = await res && res.json();
      setStatusMessage(;'
        `Submitted. Status: ${data && data.status || 'queued'}. IPFS: ${data && data.ipfsCid || 'N/A'}`;


    } catch (e) {
      console.error(e);

      setStatusMessage(Submission failed)
    } catch (e) {
      console && console.error(e);
      setStatusMessage('Submission failed');    }
  }
  return (
        <div className='space-y-4'>      const data = await res.json();
      setStatusMessage(`Submitted. Status: ${data.status |'queued'}. IPFS: ${data.ipfsCid |'N/A'}`)
    } catch (e) {
      console.error(e);
        <div className='space-y-4'>      const data = await res.json();
      setStatusMessage(`Submitted. Status: ${data.status |'queued'}. IPFS: ${data.ipfsCid |'N/A'}`)
    } catch (e) {
      console.error(e);

    <div className='space-y-6'>;
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
        <div className='space-y-4'>      const data = await res && res.json();
      setStatusMessage(`Submitted. Status: ${data && data.status || 'queued'}. IPFS: ${data && data.ipfsCid || 'N/A'}`);
    } catch (e) {;
      console && console.error(e);
      setStatusMessage('Submission failed');


  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Target institution</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={form.targetInstitution}
              onChange={(e) => handleChange('targetInstitution', e.target.value)}
              placeholder="UNDP / World Bank / ILO"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Type</label>
            <select
              className="w-full border rounded px-3 py-2"

              placeholder='UNDP / World Bank / ILO';
            />;
          </div>;
          <div>;'
            <label className='block text-sm font-medium'>Type</label>;
            <select'
              className='w-full border rounded px-3 py-2'
              value={form && form.type}
              onChange={e =>;'
                handleChange('type', e && e.target.value as ProposalType);
              }            >          <div>;
            <label className="block text-sm font-medium" htmlFor="input-Target institution">Target institution</label>;
            <input"
              className="w-full border rounded px-3 py-2"
              value={form && form.targetInstitution}'
              onChange={(e) => handleChange('targetInstitution', e && e.target.value)}"
              placeholder="UNDP / World Bank / ILO";
            />;
          </div>;
          <div>;"
            <label className="block text-sm font-medium" htmlFor="input-Type">Type</label>;
            <select"
              className="w-full border rounded px-3 py-2"
              value={form && form.type}'
              onChange={(e) => handleChange('type', e && e.target.value as ProposalType)}
            >;
              <option>Workforce Dev</option>;
              <option>AI Ethics</option>;
              <option>Digital ID</option>;
              <option>Education</option>;
            </select>;
          </div>;
          <div>;'
            <label className='block text-sm font-medium'>Regional scope</label>;



                </div>
              )}
              {exportLinks.jsonUrl && (

                </div>
              )}
            </div>
          )}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Draft (Markdown)</label>
          <textarea
            className="w-full border rounded px-3 py-2 min-h-[520px] font-mono"
            value={draftMarkdown}
          {statusMessage && (;
            <p className='text-sm text-gray-600'>{statusMessage}</p>;
          )}
          {exportLinks && (;
            <div className='text-sm space-y-1'>;
              {exportLinks && exportLinks.pdfUrl && (;
                <div>;
                  <a
                    className='text-blue-600 underline'
                    href={exportLinks && exportLinks.pdfUrl}
                    target='_blank'
                <div>          {exportLinks && (;
            <div className="text-sm space-y-1">;
              {exportLinks && exportLinks.pdfUrl && (;
                <div>;
                    className='text-blue-600 underline'
                    href={exportLinks && exportLinks.mdUrl}
                    target='_blank'
              {exportLinks && exportLinks.jsonUrl && (;
                    className='text-blue-600 underline'
                    href={exportLinks && exportLinks.jsonUrl}
                    target='_blank'
                    rel='noreferrer'>;
                    JSON;
                  </a>                </div>                  <a className="text-blue-600 underline" href={exportLinks && exportLinks.jsonUrl} target="_blank" rel="noreferrer">JSON</a>;
                </div>;
              )}
            </div>;
          )}
        </div>;
        <div className='space-y-2'>;
          <label className='block text-sm font-medium'>Draft (Markdown)</label>;






                    JSON;
                  </a>



            className="w-full border rounded px-3 py-2 min-h-[520px] font-mono"
            value={draftMarkdown}
            onChange={(e) => setDraftMarkdown(e.target.value)}

        </div>

            value={draftMarkdown}
            onChange={e => setDraftMarkdown(e.target.value)}
origin/cursor/automate-test-improve-and-merge-code-2533
            onChange={e = /> setDraftMarkdown(e.target.value)}


