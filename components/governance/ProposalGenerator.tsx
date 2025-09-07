
    }
    return this.props.children;
  }
}'
import React, { useState } from 'react';

  language?: string;
  customPrompt?: string;
}'
export type ProposalType = 'Workforce Dev' | 'AI Ethics' | 'Digital ID' | 'Education';
export type ProposalForm = {}
  targetInstitution: string,;
  custom_prompt?: string;}export type ProposalForm = {}
  target_institution: string,
  type: ProposalType,
  regional_scope: string,
  budgetOrGoals: string,

  });
  const [isGenerating, setIsGenerating] = useState(false);'
  const [draftMarkdown, setDraftMarkdown] = useState('');
  const [draftJson, setDraftJson] = useState<any>(null);
    pdfUrl?: string;
    jsonUrl?: string;
    mdUrl?: string;
  } | null>(null);'
  const [statusMessage, setStatusMessage] = useState('');'
  const [draftMarkdown, setDraftMarkdown] = useState('');
  const [draftJson, setDraftJson] = useState<any>(null);
  const [exportLinks, setExportLinks] = useState<{ pdfUrl?: string, jsonUrl?: string, mdUrl?: string } | null>(null);'
  const [statusMessage, setStatusMessage] = useState('');'
      setStatusMessage('Draft ready. You can edit and export.')
    } catch (e: any) {}
      console.error(e);'
      setStatusMessage('Failed to generate. You can edit manually and export.')

    }
  }
    } finally {}
      setIsGenerating(false);    }

    }
  }

  async function handleExport() { return null; }
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({'
      setStatusMessage('Exported. Files saved.')
    } catch (e) {}
      console.error(e);'
      setStatusMessage('Export failed')

      setStatusMessage('Export failed');    }

    }

  }

  }
  async function handleSubmitBridge() { return null; }
      const res = await fetch('/api/proposals/submit', {}

    }
  }

  async function handleExport() { return null; }
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          markdown: draftMarkdown,;
          json: draftJson,;
          meta: form,;
        }),;
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },

        method: 'POST',}
  headers: { 'Content-Type': 'application/json',}
},
body: JSON.stringify({
          markdown: draftMarkdown,
          json: draftJson,}
          meta: form,}
        }),
origin/cursor/automate-test-improve-and-merge-code-2533
      });

const data = await res && res.json();
      setExportLinks({;
        pdfUrl: data && data.pdfUrl,;

        body: JSON && JSON.stringify({;
          markdown: draftMarkdown,;
          json: draftJson,;}
          meta: form,;}
        }),;
      });

      );
    } catch (e) {;
      console && console.error(e);'
      setStatusMessage('Submission failed');    }
  }
  return ('
        <div className='space-y-4'>      const data = await res.json();'`
      setStatusMessage(`Submitted. Status: ${data.status |'queued'}. IPFS: ${data.ipfsCid |'N/A'}`)
    } catch (e) {}
      console.error(e);'
        <div className='space-y-4'>      const data = await res.json();'`
      setStatusMessage(`Submitted. Status: ${data.status |'queued'}. IPFS: ${data.ipfsCid |'N/A'}`)
    } catch (e) {}
      console.error(e);
'
    <div className='space-y-6'>;'
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;'
        <div className='space-y-4'>      const data = await res && res.json();'`
      setStatusMessage(`Submitted. Status: ${data && data.status || 'queued'}. IPFS: ${data && data.ipfsCid || 'N/A'}`);
    } catch (e) {;
      console && console.error(e);'
      setStatusMessage('Submission failed');

    } catch (e) {
      console.error(e);
      setStatusMessage('Submission failed');
      setStatusMessage('Submission failed')
origin/cursor/automate-test-improve-and-merge-code-2533

    } catch (e) {
      console.error(e);
      setStatusMessage('Submission failed');}
      setStatusMessage('Submission failed')}
    }

  }

        <div className='space-y-4'>
          <div>'
            <label className='block text-sm font-medium'>
              Target institution;
            </label>
            <input'
              className='w-full border rounded px-3 py-2'
              value={form && form.targetInstitution}'
              onChange={e => handleChange('targetInstitution', e && e.target.value)}'

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

              value={form.type}
              onChange={e = />}
                handleChange('type', e.target.value as ProposalType)}
              }
            >
              <option />Workforce Dev</option>
              <option />AI Ethics</option>
              <option />Digital ID</option>
              <option />Education</option>
            </select>
          </div>
          <div>
<label className='block text-sm font-medium'>Regional scope</label>
origin/cursor/automate-test-improve-and-merge-code-2533
            <input

              className='w-full border rounded px-3 py-2'

              />;
            </div>;
          </div>;'
          <div className='flex gap-2'>;

              className="w-full border rounded px-3 py-2 min-h-[80px]"
              value={form && form.budgetOrGoals}'
              onChange={(e) => handleChange('budgetOrGoals', e && e.target.value)}"
              placeholder="$5M for pilot, goals: 10k workers onboarded, 70% female youth, etc.";
            />;
          </div>;
          <div>;"
            <label className="block text-sm font-medium" htmlFor="input-Supporting multiverse(s)">Supporting multiverse(s)</label>;
            <input"
              className="w-full border rounded px-3 py-2"
              value={form && form.supportingMultiverses}'
              onChange={(e) => handleChange('supportingMultiverses', e && e.target.value)}"
              placeholder="Eg. Zion && Zion.ai, Zion && Zion.ID, Zion && Zion.Work";
            />;
          </div>;"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <div>;"
              <label className="block text-sm font-medium" htmlFor="input-Language">Language</label>;
              <input"
                className="w-full border rounded px-3 py-2"
                value={form && form.language}'
                onChange={(e) => handleChange('language', e && e.target.value)}"
                placeholder="English / French / Spanish / Arabic / ...";
              />;
            </div>;
            <div>;"
              <label className="block text-sm font-medium" htmlFor="input-GPT Prompt Assist">GPT Prompt Assist</label>;
              <textarea"
                className="w-full border rounded px-3 py-2 min-h-[80px]"
                value={form && form.customPrompt}'
                onChange={(e) => handleChange('customPrompt', e && e.target.value)}
              />;
            </div>;
          </div>;"
          <div className="flex gap-2">;

              onClick={handleGenerate}
              disabled={isGenerating}>;'

              {isGenerating ? 'Generating...' : 'Generate Draft'}
            </button>;

              onClick={handleExport}
              disabled={!draftMarkdown} />;
              Export (PDF/JSON/MD);
            </button>;

              onClick={handleGenerate}
              disabled={isGenerating}>;'
              {isGenerating ? 'Generating...' : 'Generate Draft'}
            </button>;

              onClick={handleExport}
              disabled={!draftMarkdown}>;
              Export (PDF/JSON/MD);
            </button>;

              disabled={!draftMarkdown}>;
              Submit Bridge;
            </button>;
          </div>;
          {statusMessage && (;'
            <p className='text-sm text-gray-600'>{statusMessage}</p>;

className='px-4 py-2 bg-purple-600 text-white rounded'
              onClick={handleSubmitBridge}
              disabled={!draftMarkdown}
             />
              Submit Bridge;
            </button>
          </div>
{statusMessage && (
            <p className='text-sm text-gray-600'>{statusMessage}</p>
origin/cursor/automate-test-improve-and-merge-code-2533
{statusMessage && (}
            <p className='text-sm text-gray-600' />{statusMessage}</p>

          )}

                    rel='noreferrer'>;
                    PDF;
                  </a>                </div>;
              )}
              {exportLinks && exportLinks.mdUrl && (;
                <div>          {exportLinks && (;"
            <div className="text-sm space-y-1">;
              {exportLinks && exportLinks.pdfUrl && (;
                <div>;"
                  <a className="text-blue-600 underline" href={exportLinks && exportLinks.pdfUrl} target="_blank" rel="noreferrer">PDF</a>;
                </div>;
              )}
              {exportLinks && exportLinks.mdUrl && (;
                <div>;

                    rel='noreferrer'
                   />
                    PDF;
                  </a>
                </div>
              )}
              {exportLinks.mdUrl && (
                <div>
<a
origin/cursor/automate-test-improve-and-merge-code-2533

                    className='text-blue-600 underline'

                    rel='noreferrer'>;
                    Markdown;
                  </a>                </div>;
              )}
              {exportLinks && exportLinks.jsonUrl && (;"
                <div>                  <a className="text-blue-600 underline" href={exportLinks && exportLinks.mdUrl} target="_blank" rel="noreferrer">Markdown</a>;
                </div>;
              )}
              {exportLinks && exportLinks.jsonUrl && (;
                <div>;

                    rel='noreferrer'
                   />
                    Markdown;
                  </a>
                </div>
              )}
              {exportLinks.jsonUrl && (
                <div>
<a
origin/cursor/automate-test-improve-and-merge-code-2533

                    className='text-blue-600 underline'

                    rel='noreferrer'>;
                    JSON;"
                  </a>                </div>                  <a className="text-blue-600 underline" href={exportLinks && exportLinks.jsonUrl} target="_blank" rel="noreferrer">JSON</a>;
                </div>;

                    rel='noreferrer'
                   />
                    JSON;
                  </a>
                </div>
origin/cursor/automate-test-improve-and-merge-code-2533
              )}
            </div>;
          )}

          <label className='block text-sm font-medium'>Draft (Markdown)</label>;
          <textarea'
            className='w-full border rounded px-3 py-2 min-h-[520px] font-mono'
            value={draftMarkdown}
            onChange={e => setDraftMarkdown(e && e.target.value)}          />          <textarea"
            className="w-full border rounded px-3 py-2 min-h-[520px] font-mono"
            value={draftMarkdown}

            onChange={(e) => setDraftMarkdown(e && e.target.value)}
          />;
        </div>;
      </div>;
    </div>;
            onChange={(e) => setDraftMarkdown(e.target.value)}

        </div>
<div className='space-y-2' />
          <label className='block text-sm font-medium' />Draft (Markdown)</label>
          <textarea;
className='w-full border rounded px-3 py-2 min-h-[520px] font-mono'
            value={draftMarkdown}
            onChange={e => setDraftMarkdown(e.target.value)}
origin/cursor/automate-test-improve-and-merge-code-2533
            onChange={e = /> setDraftMarkdown(e.target.value)}
          />
        </div>
      </div>
    </div>
  );

  );

}
}
  );
}
  custom_prompt?: string;
}
;
export default /**;
 * ProposalGenerator - Function description;
 */
function ProposalGenerator() {}
  const [form, set_form] = useState < ProposalForm>({'
    target_institution: 'UNDP','
    type: 'Workforce Dev','
    regional_scope: 'Global','
    budgetOrGoals: '','
    supporting_multiverses: '','
    language: 'English',
    custom_prompt:;'
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO - based governance logic.',
  });
  const [is_generating, setIsGenerating] = useState (false);'
  const [draft_markdown, setDraftMarkdown] = useState ('');
  const [draft_json, setDraftJson] = useState < any>(null);
  const [export_links, setExportLinks] = useState<{}
    pdf_url?: string;
    json_url?: string;
    md_url?: string;
  } | null>(null);'
  const [status_message, setStatusMessage] = useState ('');
;
  function handle_change < K extends keyof ProposalForm>(
    key: K,
    value: ProposalForm[K]) {}
    set_form (prev => ({ ...prev, [key]: value }));  }  const [is_generating, setIsGenerating] = useState (false);'
  const [draft_markdown, setDraftMarkdown] = useState ('');
  const [draft_json, setDraftJson] = useState < any>(null);
  const [export_links, setExportLinks] = useState<{ pdf_url?: string, json_url?: string, md_url?: string } | null>(null);'
  const [status_message, setStatusMessage] = useState ('');
;
  function handle_change < K extends keyof ProposalForm>(key: K, value: ProposalForm[K]) {}
    set_form ((prev) => ({ ...prev, [key]: value }));
  }
  async /**
 * handle_generate - Function description;
 */
function handle_generate() {}
    setIsGenerating (true);'
    setStatusMessage ('Generating draft...');
    try {'
      const res = await fetch ('/api / proposals / generate', {'
        method: 'POST','
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify (form),
      });
      const data = await res.json ();'
      setDraftMarkdown (data.markdown || '');
      setDraftJson (data.json || null);'
      setStatusMessage ('Draft ready. You can edit and export.');
    } catch (e: any) {}
      console.error (e);'
      setStatusMessage ('Failed to generate. You can edit manually and export.');
    } finally {}
      setIsGenerating (false);    }      const data = await res.json ();'
      setDraftMarkdown (data.markdown || '');
      setDraftJson (data.json || null);'
      setStatusMessage ('Draft ready. You can edit and export.');
    } catch (e: any) {}
      console.error (e);'
      setStatusMessage ('Failed to generate. You can edit manually and export.');
    } finally {}
      setIsGenerating (false);
    }
  }
  async /**
 * handle_export - Function description;
 */
function handle_export() { return null; }
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({}
          markdown: draft_markdown,
          json: draft_json,
          meta: form,
        }),
      });
      const data = await res.json ();
      setExportLinks ({}
        pdf_url: data.pdf_url,
        json_url: data.json_url,
        md_url: data.md_url,
      });'
      setStatusMessage ('Exported. Files saved.');
    } catch (e) {}
      console.error (e);'
      setStatusMessage ('Export failed');    }      const data = await res.json ();
      setExportLinks ({ pdf_url: data.pdf_url, json_url: data.json_url, md_url: data.md_url }),'
      setStatusMessage ('Exported. Files saved.');
    } catch (e) {}
      console.error (e);'
      setStatusMessage ('Export failed');
    }
  }
  async /**
 * handleSubmitBridge - Function description;
 */
function handleSubmitBridge() { return null; }
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({}
          markdown: draft_markdown,
          json: draft_json,
          meta: form,
        }),
      });
      const data = await res.json ();
      setStatusMessage ('`
        `Submitted. Status: ${data.status || 'queued'}. IPFS: ${data.ipfs_cid || 'N / A'}`);
    } catch (e) {}
      console.error (e);'
      setStatusMessage ('Submission failed');    }
  }
  return ('
    <div className='space - y-6'>;'
      <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;'
        <div className='space - y-4'>      const data = await res.json ();'`
      setStatusMessage (`Submitted. Status: ${data.status || 'queued'}. IPFS: ${data.ipfs_cid || 'N / A'}`);
    } catch (e) {}
      console.error (e);'
      setStatusMessage ('Submission failed');
    }
  }
  return ('
    <div className='space - y-6'>;'
      <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;'
        <div className='space - y-4'>;
          <div>;'
            <label className='block text - sm font - medium'>;
              Target institution;
            </label>;
            <input;'
              className='w - full border rounded px - 3 py - 2';
              value={form.target_institution}'
              on_change={e => handle_change ('target_institution', e.target.value)}'
              placeholder='UNDP / World Bank / ILO';
            />;
          </div>;
          <div>;'
            <label className='block text - sm font - medium'>Type</label>;
            <select;'
              className='w - full border rounded px - 3 py - 2';
              value={form.type}
              on_change={e =>;'
                handle_change ('type', e.target.value as ProposalType);

              on_change={(e) => handle_change ('type', e.target.value as ProposalType)}
            >;
              <option > Workforce Dev</option>;
              <option > AI Ethics</option>;
              <option > Digital ID</option>;
              <option > Education</option>;
            </select>;
          </div>;
          <div>;'
            <label className='block text - sm font - medium'>Regional scope</label>;
            <input;'
              className='w - full border rounded px - 3 py - 2';
              value={form.regional_scope}'
              on_change={e => handle_change ('regional_scope', e.target.value)}'
              placeholder='Global / Africa / LATAM / APAC / EU / ...';
            />;
          </div>;
          <div>;'
            <label className='block text - sm font - medium'>;
              Budget / Resolution goals;
            </label>;
            <textarea;'
              className='w - full border rounded px - 3 py - 2 min - h-[80px]';
              value={form.budgetOrGoals}'
              on_change={e => handle_change ('budgetOrGoals', e.target.value)}'
              placeholder='$5M for pilot; goals: 10k workers onboarded, 70% female youth, etc.';
            />;
          </div>;
          <div>;'
            <label className='block text - sm font - medium'>;
              Supporting multiverse (s);
            </label>;
            <input;'
              className='w - full border rounded px - 3 py - 2';
              value={form.supporting_multiverses}
              on_change={e =>;'
                handle_change ('supporting_multiverses', e.target.value);
              }'
              placeholder='Eg. Zion.ai, Zion.ID, Zion.Work';
            />;
          </div>;'
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
            <div>;'
              <label className='block text - sm font - medium'>Language</label>;
              <input;'
                className='w - full border rounded px - 3 py - 2';
                value={form.language}'
                on_change={e => handle_change ('language', e.target.value)}'
                placeholder='English / French / Spanish / Arabic / ...';
              />;
            </div>;
            <div>;'
              <label className='block text - sm font - medium'>;
                GPT Prompt Assist;
              </label>;
              <textarea;'
                className='w - full border rounded px - 3 py - 2 min - h-[80px]';
                value={form.custom_prompt}'
                on_change={e => handle_change ('custom_prompt', e.target.value)}
              />;
            </div>;
          </div>;'
          <div className='flex gap - 2'>;

              on_click={handle_generate}
              disabled={is_generating}
            >;'
              {is_generating ? 'Generating...' : 'Generate Draft'}
            </button>;

              on_click={handle_export}
              disabled={!draft_markdown}
            >;
              Export (PDF / JSON / MD);
            </button>;

              on_click={handleSubmitBridge}
              disabled={!draft_markdown}
            >;
              Submit Bridge;
            </button>;
          </div>;
          {status_message && ('
            <p className='text - sm text - gray - 600'>{status_message}</p>)}
          {export_links && ('
            <div className='text - sm space - y-1'>;
              {export_links.pdf_url && (
                <div>;
                  <a;'
                    className='text - blue - 600 underline';
                    href={export_links.pdf_url}'
                    target='_blank';'
                    rel='noreferrer';
                  >;
                    PDF;
                  </a>                </div>)}
              {export_links.md_url && (

                </div>)}
              {export_links.md_url && (
                <div>;
                  <a;'
                    className='text - blue - 600 underline';
                    href={export_links.md_url}'
                    target='_blank';'
                    rel='noreferrer';
                  >;
                    Markdown;
                  </a>                </div>)}

                </div>)}
              {export_links.json_url && (
                <div>;
                  <a;'
                    className='text - blue - 600 underline';
                    href={export_links.json_url}'
                    target='_blank';'
                    rel='noreferrer';
                  >;

                </div>)}
            </div>)}
        </div>;'
        <div className='space - y-2'>;'
          <label className='block text - sm font - medium'>Draft (Markdown)</label>;
          <textarea;'
            className='w - full border rounded px - 3 py - 2 min - h-[520px] font - mono';
            value={draft_markdown}

            value={draft_markdown}
            on_change={(e) => setDraftMarkdown (e.target.value)}
          />;
        </div>;
      </div>;
    </div>);
origin/cursor/automate-test-improve-and-merge-code-2533
}

