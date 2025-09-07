<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
class ErrorBoundary extends React.Component {}
  constructor(props) {}
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {}
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {}
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}static getDerivedStateFromError(error) {return { hasError: true ,}
}componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}
  render() {if (this.state.hasError) ;}
  return <div />Something went wrong.</div>;}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    }
    return this.props.children;
  }
<<<<<<< HEAD
}
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
import React, { useState } from 'react';
export type ProposalForm = {export type ProposalForm = {import EnhancedLayout from '../layout/EnhancedLayout';
export type ProposalType = 'Workforce Dev' | 'AI Ethics' | 'Digital ID' | 'Education';
export type ProposalForm = any;
export type ProposalType =;
  | 'Workforce Dev';
  | 'AI Ethics';
  | 'Digital ID';
  | 'Education';

export type ProposalForm = {;

export type ProposalForm = {;
  targetInstitution: string;
;
export type ProposalForm = {
  target_institution: string;
export type ProposalForm = {targetInstitution: string;export type ProposalForm = {target_institution: string;
=======
}'
import React, { useState } from 'react';

<<<<<<< HEAD
export type ProposalForm = {;

export type ProposalForm = {;
import EnhancedLayout from '../layout/EnhancedLayout';
export type ProposalType = 'Workforce Dev' | 'AI Ethics' | 'Digital ID' | 'Education';
export type ProposalForm = any;
export type ProposalType =
  | 'Workforce Dev'
  | 'AI Ethics'
  | 'Digital ID'
  | 'Education';
export type ProposalForm = {
origin/cursor/automate-test-improve-and-merge-code-2533
  targetInstitution: string;
;
export type ProposalForm = {};
  target_institution: string;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  type: ProposalType;
  regionalScope: string;
  budgetOrGoals: string;
  supportingMultiverses: string;
  language?: string;
  targetInstitution: string,
  type: ProposalType,
  regionalScope: string,
  budgetOrGoals: string,
  supportingMultiverses: string,;
  language?: string;
<<<<<<< HEAD
  customPrompt?: string
}
export default function ProposalGenerator() {
  const [form, setForm] = useState<ProposalForm>({
    targetInstitution: 'UNDP'
    type: 'Workforce Dev'
    regionalScope: 'Global'
    budgetOrGoals: ''
    supportingMultiverses: ''
    language: 'English'
    customPrompt:

  language?: string;targetInstitution: string,type: ProposalType,regionalScope: string,budgetOrGoals: string,supportingMultiverses: string,language?: string;
  customPrompt?: string;
}customPrompt?: string;
}export default function ProposalGenerator() {const [form, setForm] = useState<ProposalForm>({targetInstitution: 'UNDP';
    type: 'Workforce Dev';
    regionalScope: 'Global';
    budgetOrGoals: '';
    supportingMultiverses: '';
    language: 'English';
    customPrompt:;
  language?: string;
  customPrompt?: string
}
export type ProposalType = 'Workforce Dev' | 'AI Ethics' | 'Digital ID' | 'Education';
import EnhancedLayout from '../layout/EnhancedLayout';
export type ProposalType = $2;
export type ProposalForm = $2;
  type: ProposalType,
  regionalScope: string,
  budgetOrGoals: string,
  supportingMultiverses: string,
  language?: string,
  customPrompt?: string
},
=======
  customPrompt?: string;
}
<<<<<<< HEAD
  customPrompt?: string;
};
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

origin/cursor/automate-test-improve-and-merge-code-2533
export default function ProposalGenerator() {
  const [form, setForm] = useState<ProposalForm>({
<<<<<<< HEAD
    targetInstitution: 'UNDP',
    type: 'Workforce Dev',
    regionalScope: 'Global',
    budgetOrGoals: '',
    supportingMultiverses: '',
    language: 'English',
    customPrompt:
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.'}),
  const [isGenerating, setIsGenerating] = useState($2);
  const [draftMarkdown, setDraftMarkdown] = useState($2);
  const [draftJson, setDraftJson] = useState<any>(null),
  const [exportLinks, setExportLinks] = useState<{ pdfUrl?: string, jsonUrl?: string, mdUrl?: string } | null>(null),
  const [statusMessage, setStatusMessage] = useState($2);
  function handleChange<K extends keyof ProposalForm>(key: K, value: ProposalForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function handleGenerate() {
    setIsGenerating($2);
    setStatusMessage($2);
    try {
      const res = await fetch('/api/proposals/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
  const [draftMarkdown, setDraftMarkdown] = useState('');
  const [draftJson, setDraftJson] = useState<any>(null);
  const [exportLinks, setExportLinks] = useState<{ pdfUrl?: string, jsonUrl?: string, mdUrl?: string } | null>(null);
  const [statusMessage, setStatusMessage] = useState('');
<<<<<<< HEAD
        body: JSON.stringify(form)}),
      const data = await res.json($2);
      setDraftMarkdown($2);
      setDraftJson($2);
=======
  function handleChange<K extends keyof ProposalForm>(key: K, value: ProposalForm[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
=======
    targetInstitution: 'UNDP'
    type: 'Workforce Dev'
    regionalScope: 'Global'
    budgetOrGoals: ''
    supportingMultiverses: ''
    language: 'English'
    customPrompt:

=======
export default function ProposalGenerator() {}
  const [form, setForm] = useState<ProposalForm>({'
    targetInstitution: 'UNDP''
    type: 'Workforce Dev''
    regionalScope: 'Global''
    budgetOrGoals: '''
    supportingMultiverses: '''
    language: 'English'
    customPrompt:

;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
  supporting_multiverses: string,
  language?: string
};
export default function ProposalGenerator() {;
  const [form, setForm] = useState<ProposalForm>({;
    targetInstitution: 'UNDP',;
    type: 'Workforce Dev',;
    regionalScope: 'Global',;
    budgetOrGoals: '',;
    supportingMultiverses: '',;
    language: 'English',;
    customPrompt:;
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.',;
'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.',
origin/cursor/automate-test-improve-and-merge-code-2533
=======
  supporting_multiverses: string,;
  language?: string;
};
export default function ProposalGenerator() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
    } finally {
  function handleChange<K extends keyof ProposalForm>(
    key: K
    value: ProposalForm[K]
  ) {
    setForm(prev => ({ ...prev, [key]: value }));
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  }
  async function handleGenerate() {
    setIsGenerating(true);
    setStatusMessage('Generating draft...');
    try {
      const res = await fetch('/api/proposals/generate', {
<<<<<<< HEAD
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify(form)
=======
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(form),
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      });
      const data = await res.json();
      setDraftMarkdown(data.markdown |'');
      setDraftJson(data.json |null);
      setStatusMessage('Draft ready. You can edit and export.');
    } catch (e: any) {
      console.error(e);
      setStatusMessage('Failed to generate. You can edit manually and export.');
    } finally {
<<<<<<< HEAD
      setIsGenerating(false);    }      const data = await res.json();
      setDraftMarkdown(data.markdown |'');
      setDraftJson(data.json |null);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
      setStatusMessage('Draft ready. You can edit and export.')
    } catch (e: any) {
      console.error($2);
      setStatusMessage('Failed to generate. You can edit manually and export.')
    } finally {
<<<<<<< HEAD
      setStatusMessage('Exported. Files saved.')
    } catch (e) {
      console.error(e);
      setStatusMessage('Export failed')
    }
      setStatusMessage('Export failed');    }
=======
      setIsGenerating(false);
origin/cursor/automate-test-improve-and-merge-code-2533
=======
    } finally {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }
  }
    } finally {}
      setIsGenerating(false);    }
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

    }

  language?: string;targetInstitution: string,type: ProposalType,regionalScope: string,budgetOrGoals: string,supportingMultiverses: string,language?: string;
  customPrompt?: string;
}customPrompt?: string;
}export default function ProposalGenerator() {const [form, setForm] = useState<ProposalForm>({targetInstitution: 'UNDP';
    type: 'Workforce Dev';
    regionalScope: 'Global';
    budgetOrGoals: '';
    supportingMultiverses: '';
    language: 'English';
    customPrompt:;
  language?: string;
  customPrompt?: string;
}
export type ProposalType = 'Workforce Dev' | 'AI Ethics' | 'Digital ID' | 'Education';
export type ProposalForm = {targetInstitution: string,custom_prompt?: string;}export type ProposalForm = {target_institution: string,type: ProposalType,regional_scope: string,budgetOrGoals: string,supporting_multiverses: string,language?: string;
}export default function ProposalGenerator() {const [form, setForm] = useState<ProposalForm>({targetInstitution: 'UNDP',type: 'Workforce Dev',regionalScope: 'Global',budgetOrGoals: '',supportingMultiverses: '',language: 'English',customPrompt:;
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.','Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO-based governance logic.',})const [isGenerating, setIsGenerating] = useState(false)const [draftMarkdown, setDraftMarkdown] = useState('')const [draftJson, setDraftJson] = useState<any>(null)pdfUrl?: string;
    jsonUrl?: string;
    mdUrl?: string;
  } | null>(null)const [statusMessage, setStatusMessage]  = useState('')const [draftMarkdown, setDraftMarkdown] = useState('')const [draftJson, setDraftJson] = useState<any>(null)const [exportLinks, setExportLinks] = useState<{ pdfUrl?: string, jsonUrl?: string, mdUrl?: string } | null>(null)const [statusMessage, setStatusMessage] = useState('')setStatusMessage('Draft ready. You can edit and export.')} catch (e: any) {console.error(e)setStatusMessage('Failed to generate. You can edit manually and export.')} finally {function handleChange<K extends keyof ProposalForm>() {setForm(prev => ({ ...prev, [key]: value }))}
  async function handleGenerate() {setIsGenerating(true)setStatusMessage('Generating draft...')try {const res = await fetch('/api/proposals/generate', {method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify(form),})const data = await res.json()setDraftMarkdown(data.markdown |'')setDraftJson(data.json |null)setStatusMessage('Draft ready. You can edit and export.')} catch (e: any) {console.error(e)setStatusMessage('Failed to generate. You can edit manually and export.')} finally {setIsGenerating(false)}
  }
    } finally {setIsGenerating(false)}}
  }async function handleExport() {setStatusMessage('Exporting to PDF/Markdown/JSON...')try {const res = await fetch('/api/proposals/export', {method: 'POST';
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({setStatusMessage('Exported. Files saved.')} catch (e) {console.error(e)setStatusMessage('Export failed')markdown: draftMarkdown,json: draftJson,meta: form,}),})const data = await res.json()setExportLinks({pdfUrl: data.pdfUrl;
        jsonUrl: data.jsonUrl;
        mdUrl: data.mdUrl;
      })setStatusMessage('Exported. Files saved.')} catch (e) {console.error(e)setStatusMessage('Export failed')}
      setStatusMessage('Export failed')}}}}
  async function handleSubmitBridge() {setStatusMessage('Submitting via bridge (email/IPFS/signature)...')try {const res = await fetch('/api/proposals/submit', {}
  }async function handleExport() {setStatusMessage('Exporting to PDF/Markdown/JSON...')try {const res = await fetch('/api/proposals/export', {method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON && JSON.stringify({markdown: draftMarkdown,json: draftJson,meta: form,}),method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify({markdown: draftMarkdown,json: draftJson,meta: form,}),})const data = await res && res.json()setExportLinks({pdfUrl: data && data.pdfUrl,jsonUrl: data && data.jsonUrl,mdUrl: data && data.mdUrl,})setStatusMessage('Exported. Files saved.')} catch (e) {console && console.error(e)setStatusMessage('Export failed')}      const data = await res && res.json()setExportLinks({ pdfUrl: data && data.pdfUrl, jsonUrl: data && data.jsonUrl, mdUrl: data && data.mdUrl }),setStatusMessage('Exported. Files saved.')} catch (e) {console && console.error(e)setStatusMessage('Export failed')}
  }
  async function handleSubmitBridge() {setStatusMessage('Submitting via bridge (email/IPFS/signature)...')try {const res = await fetch('/api/proposals/submit', {method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON && JSON.stringify({markdown: draftMarkdown,json: draftJson,meta: form,}),})const data = await res && res.json()setStatusMessage(`Submitted. Status: ${data && data.status || 'queued'}. IPFS: ${data && data.ipfsCid || 'N/A'}`;
      )} catch (e) {console && console.error(e)setStatusMessage('Submission failed')}
  }
      setIsGenerating(false)
    }
  }

<<<<<<< HEAD
  async function handleExport() {
    setStatusMessage($2);
    try {
      const res = await fetch('/api/proposals/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          markdown: draftMarkdown,
          json: draftJson,
    }
  }

  async function handleExport() {;
    setStatusMessage('Exporting to PDF/Markdown/JSON...');
    try {;
      const res = await fetch('/api/proposals/export', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({;
          markdown: draftMarkdown,;
          json: draftJson,;
          meta: form,;
        }),;
      });
      const data = await res && res.json();
      setExportLinks({;
        pdfUrl: data && data.pdfUrl,;
        jsonUrl: data && data.jsonUrl,;
        mdUrl: data && data.mdUrl,;
=======
      setIsGenerating(false)
    }
  }
  async function handleExport() {
    setStatusMessage('Exporting to PDF/Markdown/JSON...');
    try {
      const res = await fetch('/api/proposals/export', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({
          markdown: draftMarkdown
          json: draftJson
          meta: form
        })
=======
  async function handleExport() { return null; }
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({'
      setStatusMessage('Exported. Files saved.')
    } catch (e) {}
      console.error(e);'
      setStatusMessage('Export failed')
<<<<<<< HEAD
          markdown: draftMarkdown,
          json: draftJson,
meta: form,
        }),
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      });
      const data = await res.json();
      setExportLinks({
        pdfUrl: data.pdfUrl
        jsonUrl: data.jsonUrl
        mdUrl: data.mdUrl
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
      });
=======
      });
      setStatusMessage('Exported. Files saved.');
    } catch (e) {
      console.error(e);
      setStatusMessage('Export failed');
origin/cursor/automate-test-improve-and-merge-code-2533
    }
=======
    }'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      setStatusMessage('Export failed');    }

    }

  }

  }
  async function handleSubmitBridge() { return null; }
      const res = await fetch('/api/proposals/submit', {}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
        jsonUrl: data && data.jsonUrl,;
        mdUrl: data && data.mdUrl,;
      });'
      setStatusMessage('Exported. Files saved.');
    } catch (e) {;
      console && console.error(e);'
      setStatusMessage('Export failed');    }      const data = await res && res.json();
      setExportLinks({ pdfUrl: data && data.pdfUrl, jsonUrl: data && data.jsonUrl, mdUrl: data && data.mdUrl }),;'
      setStatusMessage('Exported. Files saved.');
    } catch (e) {;
      console && console.error(e);'
      setStatusMessage('Export failed');
    }
  }
  async function handleSubmitBridge() { return null; }
        headers: { 'Content-Type': 'application/json' },;
=======
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
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      setStatusMessage('Exported. Files saved.');
    } catch (e) {;
      console && console.error(e);
      setStatusMessage('Export failed');    }      const data = await res && res.json();
      setExportLinks({ pdfUrl: data && data.pdfUrl, jsonUrl: data && data.jsonUrl, mdUrl: data && data.mdUrl }),;
      setStatusMessage('Exported. Files saved.');
    } catch (e) {;
      console && console.error(e);
      setStatusMessage('Export failed');
    }
  }
  async function handleSubmitBridge() {;
    setStatusMessage('Submitting via bridge (email/IPFS/signature)...');
    try {;
<<<<<<< HEAD
      const res = await fetch('/api/proposals/submit', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
=======

const res = await fetch('/api/proposals/submit', {;
        method: 'POST',;}
        headers: { 'Content-Type': 'application/json',}
},;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        body: JSON && JSON.stringify({;
          markdown: draftMarkdown,;
          json: draftJson,;
          meta: form,;
        }),;
      });
<<<<<<< HEAD
      const data = await res && res.json();
      setStatusMessage(;
        `Submitted. Status: ${data && data.status || 'queued'}. IPFS: ${data && data.ipfsCid || 'N/A'}`;
      );
          meta: form})}),
      const data = await res.json($2);
      setExportLinks($2);
      setStatusMessage('Exported. Files saved.')
    } catch (e) {
      console.error($2);
      setStatusMessage('Export failed')
    }
  }
=======
<<<<<<< HEAD
      const data = await res && res.json();
      setStatusMessage(;'
        `Submitted. Status: ${data && data.status || 'queued'}. IPFS: ${data && data.ipfsCid || 'N/A'}`;
=======

const data = await res && res.json();
      setStatusMessage(;
        `Submitted. Status: ${data && data.status || 'queued'}. IPFS: ${data && data.ipfsCid || 'N/A,}
}`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

  async function handleSubmitBridge() {
    setStatusMessage('Submitting via bridge (email/IPFS/signature)...'),
    try {
      const res = await fetch('/api/proposals/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ markdown: draftMarkdown, json: draftJson, meta: form})}),
      const data = await res.json($2);
      setStatusMessage(`Submitted. Status: ${data.status || 'queued'}. IPFS: ${data.ipfsCid || 'N/A'}`)
    } catch (e) {
      console.error($2);
      setStatusMessage('Submission failed')
    } catch (e) {;
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

    }
  return (<div className='space-y-4'>      const data = await res.json()setStatusMessage(`Submitted. Status: ${data.status |'queued'}. IPFS: ${data.ipfsCid |'N/A'}`)} catch (e) {console.error(e)<div className='space-y-4'>      const data = await res.json()setStatusMessage(`Submitted. Status: ${data.status |'queued'}. IPFS: ${data.ipfsCid |'N/A'}`)} catch (e) {console.error(e)<div className='space-y-6'>;
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
        <div className='space-y-4'>      const data = await res && res.json()setStatusMessage(`Submitted. Status: ${data && data.status || 'queued'}. IPFS: ${data && data.ipfsCid || 'N/A'}`)} catch (e) {console && console.error(e)setStatusMessage('Submission failed')} catch (e) {console.error(e)setStatusMessage('Submission failed')setStatusMessage('Submission failed')}
  return (<div className='space-y-4'>      const data = await res.json()setStatusMessage(`Submitted. Status: ${data.status |'queued'}. IPFS: ${data.ipfsCid |'N/A'}`)} catch (e) {console.error(e)<div className='space-y-4'>      const data = await res.json()setStatusMessage(`Submitted. Status: ${data.status |'queued'}. IPFS: ${data.ipfsCid |'N/A'}`)} catch (e) {console.error(e)<div className='space-y-6'>;
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
        <div className='space-y-4'>      const data = await res && res.json()setStatusMessage(`Submitted. Status: ${data && data.status || 'queued'}. IPFS: ${data && data.ipfsCid || 'N/A'}`)} catch (e) {console && console.error(e)setStatusMessage('Submission failed')} catch (e) {console.error(e)setStatusMessage('Submission failed')setStatusMessage('Submission failed')}
  }
<<<<<<< HEAD
  return (<div className='space-y-6'>;
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
        <div className='space-y-4'>;
          <div>;
            <label className='block text-sm font-medium'>;
=======
<<<<<<< HEAD
<<<<<<< HEAD
  return (
<div className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
=======
  return ('
    <div className='space-y-6'>'
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className='space-y-4'>
          <div>'
            <label className='block text-sm font-medium'>
              Target institution;
            </label>
            <input'
              className='w-full border rounded px-3 py-2'
              value={form && form.targetInstitution}'
              onChange={e => handleChange('targetInstitution', e && e.target.value)}'
=======
  return (<div className='space-y-6' />;
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4' />;
        <div className='space-y-4' />;
          <div />;
            <label className='block text-sm font-medium' />;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              Target institution;
            </label>;
            <input;
              className='w-full border rounded px-3 py-2';
              value={form && form.targetInstitution}
<<<<<<< HEAD
              onChange={e => handleChange('targetInstitution', e && e.target.value)}
              placeholder='UNDP / World Bank / ILO';
            />;
          </div>;
          <div>;
            <label className='block text-sm font-medium'>Type</label>;
    }
  }

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
=======
              onChange={e = /> handleChange('targetInstitution', e && e.target.value)}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
          <div />;
            <label className='block text-sm font-medium' />Type</label>;

            <select;
className='w-full border rounded px-3 py-2'

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              value={form.type}
              onChange={(e) => handleChange('type', e.target.value as ProposalType)}
            >
              <option>Workforce Dev</option>
              <option>AI Ethics</option>
              <option>Digital ID</option>
              <option>Education</option>
            </select>
          </div>
          <div>
<<<<<<< HEAD
              value={form && form.type}
              onChange={e =>;
                handleChange('type', e && e.target.value as ProposalType);
              }            >          <div>;
            <label className="block text-sm font-medium" htmlFor="input-Target institution">Target institution</label>;
            <input
              className="w-full border rounded px-3 py-2"
              value={form && form.targetInstitution}
              onChange={(e) => handleChange('targetInstitution', e && e.target.value)}
              placeholder="UNDP / World Bank / ILO";
            />;
          </div>;
          <div>;
            <label className="block text-sm font-medium" htmlFor="input-Type">Type</label>;
            <select
              className="w-full border rounded px-3 py-2"
              value={form && form.type}
              onChange={(e) => handleChange('type', e && e.target.value as ProposalType)}
            >;
              <option>Workforce Dev</option>;
              <option>AI Ethics</option>;
              <option>Digital ID</option>;
              <option>Education</option>;
            </select>;
          </div>;
          <div>;
            <label className='block text-sm font-medium'>Regional scope</label>;
            <input
              className='w-full border rounded px-3 py-2'
            <select;
              className='w-full border rounded px-3 py-2';
              value={form && form.type}
              onChange={e =>;
                handleChange('type', e && e.target.value as ProposalType)}            >          <div>;
            <label className="block text-sm font-medium" htmlFor="input-Target institution">Target institution</label>;
=======
<label className='block text-sm font-medium'>Regional scope</label>
origin/cursor/automate-test-improve-and-merge-code-2533
            <input
=======
            <input'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              className='w-full border rounded px-3 py-2'
<<<<<<< HEAD
              value={form && form.regionalScope}'
              onChange={e => handleChange('regionalScope', e && e.target.value)}'
              placeholder='Global / Africa / LATAM / APAC / EU / ...';
            />;
          </div>;
          <div>;'
            <label className='block text-sm font-medium'>;
              Budget / Resolution goals;
            </label>;
            <textarea'
              className='w-full border rounded px-3 py-2 min-h-[80px]'
              value={form && form.budgetOrGoals}'
              onChange={e => handleChange('budgetOrGoals', e && e.target.value)}'
              placeholder='$5M for pilot; goals: 10k workers onboarded, 70% female youth, etc.';
            />;
          </div>;
          <div>;'
            <label className='block text-sm font-medium'>;
              Supporting multiverse(s);
            </label>;
            <input'
              className='w-full border rounded px-3 py-2'
              value={form && form.supportingMultiverses}
              onChange={e =>;'
                handleChange('supportingMultiverses', e && e.target.value);
              }'
              placeholder='Eg. Zion && Zion.ai, Zion && Zion.ID, Zion && Zion.Work';
            />;
          </div>;'
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
            <div>;'
              <label className='block text-sm font-medium'>Language</label>;
              <input'
                className='w-full border rounded px-3 py-2'
                value={form && form.language}'
                onChange={e => handleChange('language', e && e.target.value)}'
                placeholder='English / French / Spanish / Arabic / ...';
              />;
            </div>;
            <div>;'
              <label className='block text-sm font-medium'>;
                GPT Prompt Assist;
              </label>;
              <textarea'
                className='w-full border rounded px-3 py-2 min-h-[80px]'
                value={form && form.customPrompt}'
                onChange={e => handleChange('customPrompt', e && e.target.value)}
=======
          <div />
<label className='block text-sm font-medium' />Regional scope</label>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            <input;
              className="w-full border rounded px-3 py-2";
              value={form && form.targetInstitution}
              onChange={(e) => handleChange('targetInstitution', e && e.target.value)}
              placeholder="UNDP / World Bank / ILO";
            />;
          </div>;
          <div>;
            <label className="block text-sm font-medium" htmlFor="input-Type">Type</label>;
            <select;
              className="w-full border rounded px-3 py-2";
              value={form && form.type}
              onChange={(e) => handleChange('type', e && e.target.value as ProposalType)}
            >;
              <option>Workforce Dev</option>;
              <option>AI Ethics</option>;
              <option>Digital ID</option>;
              <option>Education</option>;
            </select>;
          </div>;
          <div>;
            <label className='block text-sm font-medium'>Regional scope</label>;value={form.type}
              onChange={e =>;
                handleChange('type', e.target.value as ProposalType)}
            >;
              <option>Workforce Dev</option>;
              <option>AI Ethics</option>;
              <option>Digital ID</option>;
              <option>Education</option>;
            </select>;
          </div>;
          <div>;
<label className='block text-sm font-medium'>Regional scope</label>;
            <input;
              className='w-full border rounded px-3 py-2';
              value={form && form.regionalScope}
              onChange={e => handleChange('regionalScope', e && e.target.value)}
              placeholder='Global / Africa / LATAM / APAC / EU / ...';
            />;
          </div>;
          <div>;
            <label className='block text-sm font-medium'>;
              Budget / Resolution goals;
            </label>;
            <textarea;
              className='w-full border rounded px-3 py-2 min-h-[80px]';
              value={form && form.budgetOrGoals}
              onChange={e => handleChange('budgetOrGoals', e && e.target.value)}
              placeholder='$5M for pilot; goals: 10k workers onboarded, 70% female youth, etc.';
            />;
          </div>;
          <div>;
            <label className='block text-sm font-medium'>;
              Supporting multiverse(s)</label>;
            <input;
              className='w-full border rounded px-3 py-2';
              value={form && form.supportingMultiverses}
              onChange={e =>;
                handleChange('supportingMultiverses', e && e.target.value)}
              placeholder='Eg. Zion && Zion.ai, Zion && Zion.ID, Zion && Zion.Work';
            />;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
            <div>;
              <label className='block text-sm font-medium'>Language</label>;
              <input;
                className='w-full border rounded px-3 py-2';
                value={form && form.language}
                onChange={e => handleChange('language', e && e.target.value)}
                placeholder='English / French / Spanish / Arabic / ...';
              />;
            </div>;
            <div>;
              <label className='block text-sm font-medium'>;
                GPT Prompt Assist;
              </label>;
              <textarea;
                className='w-full border rounded px-3 py-2 min-h-[80px]';
                value={form && form.customPrompt}
<<<<<<< HEAD
                onChange={e => handleChange('customPrompt', e && e.target.value)}
=======
                onChange={e = /> handleChange('customPrompt', e && e.target.value)}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              />;
            </div>;
          </div>;'
          <div className='flex gap-2'>;
<<<<<<< HEAD
            <button'
              className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'              onClick={handleGenerate}            <input;
            <textarea"
=======
            <button
              className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'              onClick={handleGenerate}            <input
            <textarea
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              className="w-full border rounded px-3 py-2 min-h-[80px]"
              value={form && form.budgetOrGoals}'
              onChange={(e) => handleChange('budgetOrGoals', e && e.target.value)}"
              placeholder="$5M for pilot, goals: 10k workers onboarded, 70% female youth, etc.";
            />;
          </div>;
<<<<<<< HEAD
          <div className='flex gap-2'>;
=======
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
<<<<<<< HEAD
            <button
              className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
            <button;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              onClick={handleGenerate}
              disabled={isGenerating}>;'
=======
          <div className='flex gap-2' />;

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
            <button;
              className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'              onClick={handleGenerate}            <input;
            <textarea;
              className="w-full border rounded px-3 py-2 min-h-[80px]";
            <button
              className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'              onClick={handleGenerate}            <input
            <textarea
              className="w-full border rounded px-3 py-2 min-h-[80px]"
              value={form && form.budgetOrGoals}
              onChange={(e) => handleChange('budgetOrGoals', e && e.target.value)}
              placeholder="$5M for pilot, goals: 10k workers onboarded, 70% female youth, etc.";
            />;
          </div>;
          <div>;
            <label className="block text-sm font-medium" htmlFor="input-Supporting multiverse(s)">Supporting multiverse(s)</label>;
            <input;
              className="w-full border rounded px-3 py-2";
              value={form && form.supportingMultiverses}
              onChange={(e) => handleChange('supportingMultiverses', e && e.target.value)}
              placeholder="Eg. Zion && Zion.ai, Zion && Zion.ID, Zion && Zion.Work";
            />;
          </div>;
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;
            <div>;
              <label className="block text-sm font-medium" htmlFor="input-Language">Language</label>;
              <input;
                className="w-full border rounded px-3 py-2";
                value={form && form.language}
                onChange={(e) => handleChange('language', e && e.target.value)}
                placeholder="English / French / Spanish / Arabic / ...";
              />;
            </div>;
            <div>;
              <label className="block text-sm font-medium" htmlFor="input-GPT Prompt Assist">GPT Prompt Assist</label>;
              <textarea;
                className="w-full border rounded px-3 py-2 min-h-[80px]";
                value={form && form.customPrompt}
                onChange={(e) => handleChange('customPrompt', e && e.target.value)}
              />;
            </div>;
          </div>;
          <div className="flex gap-2">;
            <button
            <button;
              className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50';
            <label className="block text-sm font-medium">Regional scope</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={form.regionalScope}
              onChange={(e) => handleChange('regionalScope', e.target.value)}
              placeholder="Global / Africa / LATAM / APAC / EU / ..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Budget / Resolution goals</label>
            <textarea
              className="w-full border rounded px-3 py-2 min-h-[80px]"
              value={form.budgetOrGoals}
              onChange={(e) => handleChange('budgetOrGoals', e.target.value)}
              placeholder="$5M for pilot, goals: 10k workers onboarded, 70% female youth, etc."
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Supporting multiverse(s)</label>
            <input
              className="w-full border rounded px-3 py-2"
              value={form.supportingMultiverses}
              onChange={(e) => handleChange('supportingMultiverses', e.target.value)}
              placeholder="Eg. Zion.ai, Zion.ID, Zion.Work"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Language</label>
              <input
                className="w-full border rounded px-3 py-2"
                value={form.language}
                onChange={(e) => handleChange('language', e.target.value)}
                placeholder="English / French / Spanish / Arabic / ..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium">GPT Prompt Assist</label>
              <textarea
                className="w-full border rounded px-3 py-2 min-h-[80px]"
                value={form.customPrompt}
                onChange={(e) => handleChange('customPrompt', e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              onClick={handleGenerate}
<<<<<<< HEAD
              disabled={isGenerating}
            >
              {isGenerating ? 'Generating...' : 'Generate Draft'}
            <button
=======
              disabled={isGeneratin,}
} />;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              {isGenerating ? 'Generating...' : 'Generate Draft'}
            </button>;
<<<<<<< HEAD
            <button
className='px-4 py-2 bg-emerald-600 text-white rounded'
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
=======
            <button;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

className='px-4 py-2 bg-emerald-600 text-white rounded'
<<<<<<< HEAD

            </button>
            <button
              className="px-4 py-2 bg-emerald-600 text-white rounded"
              onClick={handleExport}
              disabled={!draftMarkdown}
            >
              Export (PDF/JSON/MD)
            </button>
            <button
              className="px-4 py-2 bg-purple-600 text-white rounded"
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              onClick={handleExport}
              disabled={!draftMarkdown} />;
              Export (PDF/JSON/MD);
            </button>;
<<<<<<< HEAD
            <button;
=======
            <button

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
              onClick={handleGenerate}
              disabled={isGenerating}>;'
              {isGenerating ? 'Generating...' : 'Generate Draft'}
            </button>;
<<<<<<< HEAD
            <button

=======
            <button;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              onClick={handleExport}
              disabled={!draftMarkdown}>;
              Export (PDF/JSON/MD);
            </button>;
<<<<<<< HEAD
            <button

=======
            <button;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              disabled={!draftMarkdown}>;
              Submit Bridge;
            </button>;
          </div>;
          {statusMessage && (;'
            <p className='text-sm text-gray-600'>{statusMessage}</p>;
<<<<<<< HEAD
=======
            <button;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
className='px-4 py-2 bg-purple-600 text-white rounded'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              onClick={handleSubmitBridge}
              disabled={!draftMarkdown}
            >
              Submit Bridge
            </button>
          </div>
<<<<<<< HEAD
            <button;
className='px-4 py-2 bg-emerald-600 text-white rounded';
              onClick={handleExport}
              disabled={!draftMarkdown}>;
              Export (PDF/JSON/MD)</button>;
            <button;
=======
{statusMessage && (
            <p className='text-sm text-gray-600'>{statusMessage}</p>
origin/cursor/automate-test-improve-and-merge-code-2533
{statusMessage && (}
            <p className='text-sm text-gray-600' />{statusMessage}</p>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

              onClick={handleGenerate}
              disabled={isGenerating}>;
              {isGenerating ? 'Generating...' : 'Generate Draft'}
            </button>;
            <button;
              onClick={handleExport}
              disabled={!draftMarkdown}>;
              Export (PDF/JSON/MD)</button>;
            <button;
            <button

              onClick={handleExport}
              disabled={!draftMarkdown}>;
              Export (PDF/JSON/MD);
            </button>;
            <button

              disabled={!draftMarkdown}>;
              Submit Bridge;
            </button>;
          </div>;
          {statusMessage && (<p className='text-sm text-gray-600'>{statusMessage}</p>;className='px-4 py-2 bg-purple-600 text-white rounded';
              onClick={handleSubmitBridge}
              disabled={!draftMarkdown}
            >;
              Submit Bridge;
            </button>;
          </div>;
{statusMessage && (<p className='text-sm text-gray-600'>{statusMessage}</p>;
          )}
<<<<<<< HEAD
          {exportLinks && (<div className='text-sm space-y-1'>;
              {exportLinks && exportLinks.pdfUrl && (<div>;
                  <a;
                    className='text-blue-600 underline';
                    href={exportLinks && exportLinks.pdfUrl}
          {statusMessage && <p className="text-sm text-gray-600">{statusMessage}</p>}
          {exportLinks && (
            <div className="text-sm space-y-1">
              {exportLinks.pdfUrl && (
                <div>
                  <a className="text-blue-600 underline" href={exportLinks.pdfUrl} target="_blank" rel="noreferrer">PDF</a>
=======
<<<<<<< HEAD
          {exportLinks && (;'
            <div className='text-sm space-y-1'>;
              {exportLinks && exportLinks.pdfUrl && (;
                <div>;
                  <a'
                    className='text-blue-600 underline'
                    href={exportLinks && exportLinks.pdfUrl}'
                    target='_blank''
=======
          {exportLinks && (<div className='text-sm space-y-1' />;
              {exportLinks && exportLinks.pdfUrl && (<div />;
                  <a;}
                    className='text-blue-600 underline';}
                    href={exportLinks && exportLinks.pdfUrl}

                    target='_blank'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
                  <a
<<<<<<< HEAD
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    rel='noreferrer'
                   />
                    PDF;
                  </a>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                </div>
              )}
              {exportLinks.mdUrl && (
                <div>
<<<<<<< HEAD
                  <a className="text-blue-600 underline" href={exportLinks.mdUrl} target="_blank" rel="noreferrer">Markdown</a>
=======
<a
origin/cursor/automate-test-improve-and-merge-code-2533
=======
                  <a'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    className='text-blue-600 underline'
<<<<<<< HEAD
                    href={exportLinks && exportLinks.mdUrl}'
                    target='_blank''
=======
                    href={exportLinks && exportLinks.mdUrl}
                    target='_blank'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
                  <a
<<<<<<< HEAD
=======
                <div />
<a;}
className='text-blue-600 underline'}
                    href={exportLinks && exportLinks.mdUrl}
                    target='_blank'

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    rel='noreferrer'
                   />
                    Markdown;
                  </a>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                </div>
              )}
              {exportLinks.jsonUrl && (
                <div>
<<<<<<< HEAD
                  <a className="text-blue-600 underline" href={exportLinks.jsonUrl} target="_blank" rel="noreferrer">JSON</a>
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
                    rel='noreferrer'>;
                    PDF;
                  </a>                </div>;
              )}
              {exportLinks && exportLinks.mdUrl && (;
                <div>          {exportLinks && (;
            <div className="text-sm space-y-1">;
              {exportLinks && exportLinks.pdfUrl && (;
                <div>;
                  <a className="text-blue-600 underline" href={exportLinks && exportLinks.pdfUrl} target="_blank" rel="noreferrer">PDF</a>;
                </div>;
              )}
              {exportLinks && exportLinks.mdUrl && (;
                <div>;
                  <a
                    className='text-blue-600 underline'
                    href={exportLinks && exportLinks.mdUrl}
                    target='_blank'
                    rel='noreferrer'>;
                    Markdown;
                  </a>                </div>;
              )}
              {exportLinks && exportLinks.jsonUrl && (;
                <div>                  <a className="text-blue-600 underline" href={exportLinks && exportLinks.mdUrl} target="_blank" rel="noreferrer">Markdown</a>;
                </div>;
              )}
              {exportLinks && exportLinks.jsonUrl && (;
                <div>;
                  <a
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
          <textarea
            className='w-full border rounded px-3 py-2 min-h-[520px] font-mono'
            value={draftMarkdown}
            onChange={e => setDraftMarkdown(e && e.target.value)}          />          <textarea
            className="w-full border rounded px-3 py-2 min-h-[520px] font-mono"
            value={draftMarkdown}

            onChange={(e) => setDraftMarkdown(e && e.target.value)}
          />;
        </div>;
      </div>;
    </div>;
            onChange={(e) => setDraftMarkdown(e.target.value)}
            onChange={(e) => setDraftMarkdown(e.target.value)}
=======
<a
origin/cursor/automate-test-improve-and-merge-code-2533
=======
                  <a'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    className='text-blue-600 underline'
<<<<<<< HEAD
                    href={exportLinks && exportLinks.jsonUrl}'
                    target='_blank''
=======
                    href={exportLinks && exportLinks.jsonUrl}
                    target='_blank'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    rel='noreferrer'>;
                    JSON;"
                  </a>                </div>                  <a className="text-blue-600 underline" href={exportLinks && exportLinks.jsonUrl} target="_blank" rel="noreferrer">JSON</a>;
                </div>;
<<<<<<< HEAD
=======
                <div />
<a;}
className='text-blue-600 underline'}
                    href={exportLinks && exportLinks.jsonUrl}
                    target='_blank'

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    rel='noreferrer'
                   />
                    JSON;
                  </a>
                </div>
origin/cursor/automate-test-improve-and-merge-code-2533
              )}
            </div>;
          )}
<<<<<<< HEAD
        </div>;'
        <div className='space-y-2'>;'
=======
        </div>;
        <div className='space-y-2'>;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
=======
              )}
            </div>;
          )}

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        </div>
<div className='space-y-2' />
          <label className='block text-sm font-medium' />Draft (Markdown)</label>
          <textarea;
className='w-full border rounded px-3 py-2 min-h-[520px] font-mono'
            value={draftMarkdown}
            onChange={e => setDraftMarkdown(e.target.value)}
origin/cursor/automate-test-improve-and-merge-code-2533
            onChange={e = /> setDraftMarkdown(e.target.value)}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          />
        </div>
      </div>
    </div>
<<<<<<< HEAD


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
<<<<<<< HEAD
              }            >          <div>;
            <label className="block text-sm font-medium" html_for="input - Target institution">Target institution</label>;
            <input;
              className="w - full border rounded px-3 py-2";
              value={form.target_institution}
              on_change={(e) => handle_change ('target_institution', e.target.value)}
              placeholder="UNDP / World Bank / ILO";
            />;
          </div>;
          <div>;
            <label className="block text-sm font-medium" html_for="input - Type">Type</label>;
            <select;
              className="w - full border rounded px-3 py-2";
              value={form.type}
=======
              }            >          <div>;"
            <label className="block text - sm font - medium" html_for="input - Target institution">Target institution</label>;
            <input;"
              className="w - full border rounded px - 3 py - 2";
              value={form.target_institution}'
              on_change={(e) => handle_change ('target_institution', e.target.value)}"
              placeholder="UNDP / World Bank / ILO";
            />;
          </div>;
          <div>;"
            <label className="block text - sm font - medium" html_for="input - Type">Type</label>;
            <select;"
              className="w - full border rounded px - 3 py - 2";
              value={form.type}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
            <button;
              className='px - 4 py - 2 bg - blue - 600 text - white rounded disabled:opacity - 50'              on_click={handle_generate}            <input;
              className="w - full border rounded px-3 py-2";
              value={form.regional_scope}
              on_change={(e) => handle_change ('regional_scope', e.target.value)}
              placeholder="Global / Africa / LATAM / APAC / EU / ...";
            />;
          </div>;
          <div>;
            <label className="block text-sm font-medium" html_for="input - Budget / Resolution goals">Budget / Resolution goals</label>;
            <textarea;
              className="w - full border rounded px - 3 py-2 min-h-[80px]";
              value={form.budgetOrGoals}
              on_change={(e) => handle_change ('budgetOrGoals', e.target.value)}
              placeholder="$5M for pilot, goals: 10k workers onboarded, 70% female youth, etc.";
            />;
          </div>;
          <div>;
            <label className="block text-sm font-medium" html_for="input - Supporting multiverse (s)">Supporting multiverse (s)</label>;
            <input;
              className="w - full border rounded px-3 py-2";
              value={form.supporting_multiverses}
              on_change={(e) => handle_change ('supporting_multiverses', e.target.value)}
              placeholder="Eg. Zion.ai, Zion.ID, Zion.Work";
            />;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols-2 gap-4">;
            <div>;
              <label className="block text-sm font-medium" html_for="input - Language">Language</label>;
              <input;
                className="w - full border rounded px-3 py-2";
                value={form.language}
                on_change={(e) => handle_change ('language', e.target.value)}
                placeholder="English / French / Spanish / Arabic / ...";
              />;
            </div>;
            <div>;
              <label className="block text-sm font-medium" html_for="input - GPT Prompt Assist">GPT Prompt Assist</label>;
              <textarea;
                className="w - full border rounded px - 3 py-2 min-h-[80px]";
                value={form.custom_prompt}
                on_change={(e) => handle_change ('custom_prompt', e.target.value)}
              />;
            </div>;
          </div>;
          <div className="flex gap-2">;
            <button;
              className="px - 4 py - 2 bg - blue - 600 text-white rounded disabled:opacity-50";
=======
            <button;'
              className='px - 4 py - 2 bg - blue - 600 text - white rounded disabled:opacity - 50'              on_click={handle_generate}            <input;"
              className="w - full border rounded px - 3 py - 2";
              value={form.regional_scope}'
              on_change={(e) => handle_change ('regional_scope', e.target.value)}"
              placeholder="Global / Africa / LATAM / APAC / EU / ...";
            />;
          </div>;
          <div>;"
            <label className="block text - sm font - medium" html_for="input - Budget / Resolution goals">Budget / Resolution goals</label>;
            <textarea;"
              className="w - full border rounded px - 3 py - 2 min - h-[80px]";
              value={form.budgetOrGoals}'
              on_change={(e) => handle_change ('budgetOrGoals', e.target.value)}"
              placeholder="$5M for pilot, goals: 10k workers onboarded, 70% female youth, etc.";
            />;
          </div>;
          <div>;"
            <label className="block text - sm font - medium" html_for="input - Supporting multiverse (s)">Supporting multiverse (s)</label>;
            <input;"
              className="w - full border rounded px - 3 py - 2";
              value={form.supporting_multiverses}'
              on_change={(e) => handle_change ('supporting_multiverses', e.target.value)}"
              placeholder="Eg. Zion.ai, Zion.ID, Zion.Work";
            />;
          </div>;"
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
            <div>;"
              <label className="block text - sm font - medium" html_for="input - Language">Language</label>;
              <input;"
                className="w - full border rounded px - 3 py - 2";
                value={form.language}'
                on_change={(e) => handle_change ('language', e.target.value)}"
                placeholder="English / French / Spanish / Arabic / ...";
              />;
            </div>;
            <div>;"
              <label className="block text - sm font - medium" html_for="input - GPT Prompt Assist">GPT Prompt Assist</label>;
              <textarea;"
                className="w - full border rounded px - 3 py - 2 min - h-[80px]";
                value={form.custom_prompt}'
                on_change={(e) => handle_change ('custom_prompt', e.target.value)}
              />;
            </div>;
          </div>;"
          <div className="flex gap - 2">;
            <button;"
              className="px - 4 py - 2 bg - blue - 600 text - white rounded disabled:opacity - 50";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              on_click={handle_generate}
              disabled={is_generating}
            >;'
              {is_generating ? 'Generating...' : 'Generate Draft'}
            </button>;
<<<<<<< HEAD
            <button;
              className='px - 4 py - 2 bg - emerald - 600 text - white rounded'              on_click={handle_export}              className="px - 4 py - 2 bg - emerald-600 text-white rounded";
=======
            <button;'"
              className='px - 4 py - 2 bg - emerald - 600 text - white rounded'              on_click={handle_export}              className="px - 4 py - 2 bg - emerald - 600 text - white rounded";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              on_click={handle_export}
              disabled={!draft_markdown}
            >;
              Export (PDF / JSON / MD);
            </button>;
<<<<<<< HEAD
            <button;
              className='px - 4 py - 2 bg - purple - 600 text - white rounded'              on_click={handleSubmitBridge}              className="px - 4 py - 2 bg - purple-600 text-white rounded";
=======
            <button;'"
              className='px - 4 py - 2 bg - purple - 600 text - white rounded'              on_click={handleSubmitBridge}              className="px - 4 py - 2 bg - purple - 600 text - white rounded";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
                <div>          {export_links && (
            <div className="text-sm space-y-1">;
              {export_links.pdf_url && (
                <div>;
                  <a className="text-blue-600 underline" href={export_links.pdf_url} target="_blank" rel="noreferrer">PDF</a>;
=======
                <div>          {export_links && ("
            <div className="text - sm space - y-1">;
              {export_links.pdf_url && (
                <div>;"
                  <a className="text - blue - 600 underline" href={export_links.pdf_url} target="_blank" rel="noreferrer">PDF</a>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
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
<<<<<<< HEAD
              {export_links.json_url && (
                <div>                  <a className="text-blue-600 underline" href={export_links.md_url} target="_blank" rel="noreferrer">Markdown</a>;
=======
              {export_links.json_url && ("
                <div>                  <a className="text - blue - 600 underline" href={export_links.md_url} target="_blank" rel="noreferrer">Markdown</a>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                </div>)}
              {export_links.json_url && (
                <div>;
                  <a;'
                    className='text - blue - 600 underline';
                    href={export_links.json_url}'
                    target='_blank';'
                    rel='noreferrer';
                  >;
<<<<<<< HEAD
                    JSON;
                  </a>                </div>                  <a className="text-blue-600 underline" href={export_links.json_url} target="_blank" rel="noreferrer">JSON</a>;
=======
                    JSON;"
                  </a>                </div>                  <a className="text - blue - 600 underline" href={export_links.json_url} target="_blank" rel="noreferrer">JSON</a>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                </div>)}
            </div>)}
        </div>;'
        <div className='space - y-2'>;'
          <label className='block text - sm font - medium'>Draft (Markdown)</label>;
          <textarea;'
            className='w - full border rounded px - 3 py - 2 min - h-[520px] font - mono';
            value={draft_markdown}
<<<<<<< HEAD
            on_change={e => setDraftMarkdown (e.target.value)}          />          <textarea;
            className="w - full border rounded px - 3 py - 2 min-h-[520px] font-mono";
=======
            on_change={e => setDraftMarkdown (e.target.value)}          />          <textarea;"
            className="w - full border rounded px - 3 py - 2 min - h-[520px] font - mono";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            value={draft_markdown}
            on_change={(e) => setDraftMarkdown (e.target.value)}
          />;
        </div>;
      </div>;
    </div>);
origin/cursor/automate-test-improve-and-merge-code-2533
}
<<<<<<< HEAD
'"`
=======

}
                    target='_blank';
                    rel='noreferrer'>;
                    PDF;
                  </a>                </div>;
              )}
              {exportLinks && exportLinks.mdUrl && (<div>          {exportLinks && (<div className="text-sm space-y-1">;
              {exportLinks && exportLinks.pdfUrl && (<div>;
                  <a className="text-blue-600 underline" href={exportLinks && exportLinks.pdfUrl} target="_blank" rel="noreferrer">PDF</a>;
                </div>;
              )}
              {exportLinks && exportLinks.mdUrl && (<div>;
                  <a;
                    rel='noreferrer';
                  >;
                    PDF;
                  </a>;
                </div>;
              )}
              {exportLinks.mdUrl && (<div>;
<a;
                    className='text-blue-600 underline';
                    href={exportLinks && exportLinks.mdUrl}
                    target='_blank';
                    rel='noreferrer'>;
                    Markdown;
                  </a>                </div>;
              )}
              {exportLinks && exportLinks.jsonUrl && (<div>                  <a className="text-blue-600 underline" href={exportLinks && exportLinks.mdUrl} target="_blank" rel="noreferrer">Markdown</a>;
                </div>;
              )}
              {exportLinks && exportLinks.jsonUrl && (<div>;
                  <a;
                    rel='noreferrer';
                  >;
                    Markdown;
                  </a>;
                </div>;
              )}
              {exportLinks.jsonUrl && (<div>;
<a;
                    className='text-blue-600 underline';
                    href={exportLinks && exportLinks.jsonUrl}
                    target='_blank';
                    rel='noreferrer'>;
                    JSON;
                  </a>                </div>                  <a className="text-blue-600 underline" href={exportLinks && exportLinks.jsonUrl} target="_blank" rel="noreferrer">JSON</a>;
                </div>;rel='noreferrer';
                  >;
                    JSON;
                  </a>;
                </div>;
              )}
            </div>;
          )}</div>;
        <div className='space-y-2'>;
          <label className='block text-sm font-medium'>Draft (Markdown)</label>;
          <textarea;
            className='w-full border rounded px-3 py-2 min-h-[520px] font-mono';
            value={draftMarkdown}
            onChange={e => setDraftMarkdown(e && e.target.value)}          />          <textarea;
            className="w-full border rounded px-3 py-2 min-h-[520px] font-mono";
            value={draftMarkdown}onChange={(e) => setDraftMarkdown(e && e.target.value)}
          />;
        </div>;
      </div>;
    </div>;
            onChange={(e) => setDraftMarkdown(e.target.value)}</div>;
<div className='space-y-2'>;
          <label className='block text-sm font-medium'>Draft (Markdown)</label>;
          <textarea;
            className='w-full border rounded px-3 py-2 min-h-[520px] font-mono';
            value={draftMarkdown}
            onChange={e => setDraftMarkdown(e.target.value)}/>;
        </div>;
      </div>;
    </div>;
  ))}
}
  )}
  custom_prompt?: string;
}export default /**;
 * ProposalGenerator - Function description;
 */;
function ProposalGenerator() {const [form, set_form] = useState < ProposalForm>({target_institution: 'UNDP',type: 'Workforce Dev',regional_scope: 'Global',budgetOrGoals: '',supporting_multiverses: '',language: 'English',custom_prompt:;
      'Write a proposal for the UN Development Program on integrating Zion into their Digital Labor Initiative. Include metrics, social outcomes, and DAO - based governance logic.',})const [is_generating, setIsGenerating] = useState (false)const [draft_markdown, setDraftMarkdown] = useState ('')const [draft_json, setDraftJson] = useState < any>(null)const [export_links, setExportLinks] = useState<{pdf_url?: string;
    json_url?: string;
    md_url?: string;
  } | null>(null)const [status_message, setStatusMessage]  = useState ('')function handle_change < K extends keyof ProposalForm>() {set_form (prev => ({ ...prev, [key]: value }))}  const [is_generating, setIsGenerating] = useState (false)const [draft_markdown, setDraftMarkdown] = useState ('')const [draft_json, setDraftJson] = useState < any>(null)const [export_links, setExportLinks] = useState<{ pdf_url?: string, json_url?: string, md_url?: string } | null>(null)const [status_message, setStatusMessage]  = useState ('')function handle_change < K extends keyof ProposalForm>() {set_form ((prev) => ({ ...prev, [key]: value }))}
  async /**;
 * handle_generate - Function description;
 */;
function handle_generate() {setIsGenerating (true)setStatusMessage ('Generating draft...')try {const res = await fetch ('/api / proposals / generate', {method: 'POST',headers: { 'Content - Type': 'application / json' },body: JSON.stringify (form),})const data = await res.json ()setDraftMarkdown (data.markdown || '')setDraftJson (data.json || null)setStatusMessage ('Draft ready. You can edit and export.')} catch (e: any) {console.error (e)setStatusMessage ('Failed to generate. You can edit manually and export.')} finally {setIsGenerating (false)}      const data = await res.json ()setDraftMarkdown (data.markdown || '')setDraftJson (data.json || null)setStatusMessage ('Draft ready. You can edit and export.')} catch (e: any) {console.error (e)setStatusMessage ('Failed to generate. You can edit manually and export.')} finally {setIsGenerating (false)}
  }
  async /**;
 * handle_export - Function description;
 */;
function handle_export() {setStatusMessage ('Exporting to PDF / Markdown / JSON...')try {const res = await fetch ('/api / proposals / export', {method: 'POST',headers: { 'Content - Type': 'application / json' },body: JSON.stringify ({markdown: draft_markdown,json: draft_json,meta: form,}),})const data = await res.json ()setExportLinks ({pdf_url: data.pdf_url,json_url: data.json_url,md_url: data.md_url,})setStatusMessage ('Exported. Files saved.')} catch (e) {console.error (e)setStatusMessage ('Export failed')}      const data = await res.json ()setExportLinks ({ pdf_url: data.pdf_url, json_url: data.json_url, md_url: data.md_url }),setStatusMessage ('Exported. Files saved.')} catch (e) {console.error (e)setStatusMessage ('Export failed')}
  }
  async /**;
 * handleSubmitBridge - Function description;
 */;
function handleSubmitBridge() {setStatusMessage ('Submitting via bridge (email / IPFS / signature)...')try {const res = await fetch ('/api / proposals / submit', {method: 'POST',headers: { 'Content - Type': 'application / json' },body: JSON.stringify ({markdown: draft_markdown,json: draft_json,meta: form,}),})const data = await res.json ()setStatusMessage (`Submitted. Status: ${data.status || 'queued'}. IPFS: ${data.ipfs_cid || 'N / A'}`)} catch (e) {console.error (e)setStatusMessage ('Submission failed')}
  }
  return (<div className='space - y-6'>;
      <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
        <div className='space - y-4'>      const data = await res.json ()setStatusMessage (`Submitted. Status: ${data.status || 'queued'}. IPFS: ${data.ipfs_cid || 'N / A'}`)} catch (e) {console.error (e)setStatusMessage ('Submission failed')}
  }
  return (<div className='space - y-6'>;
      <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
        <div className='space - y-4'>;
          <div>;
            <label className='block text - sm font - medium'>;
              Target institution;
            </label>;
            <input;
              className='w - full border rounded px - 3 py - 2';
              value={form.target_institution}
              on_change={e => handle_change ('target_institution', e.target.value)}
              placeholder='UNDP / World Bank / ILO';
            />;
          </div>;
          <div>;
            <label className='block text - sm font - medium'>Type</label>;
            <select;
              className='w - full border rounded px - 3 py - 2';
              value={form.type}
              on_change={e =>;
                handle_change ('type', e.target.value as ProposalType)}            >          <div>;
            <label className="block text-sm font-medium" html_for="input - Target institution">Target institution</label>;
            <input;
              className="w - full border rounded px-3 py-2";
              value={form.target_institution}
              on_change={(e) => handle_change ('target_institution', e.target.value)}
              placeholder="UNDP / World Bank / ILO";
            />;
          </div>;
          <div>;
            <label className="block text-sm font-medium" html_for="input - Type">Type</label>;
            <select;
              className="w - full border rounded px-3 py-2";
              value={form.type}
              on_change={(e) => handle_change ('type', e.target.value as ProposalType)}
            >;
              <option > Workforce Dev</option>;
              <option > AI Ethics</option>;
              <option > Digital ID</option>;
              <option > Education</option>;
            </select>;
          </div>;
          <div>;
            <label className='block text - sm font - medium'>Regional scope</label>;
            <input;
              className='w - full border rounded px - 3 py - 2';
              value={form.regional_scope}
              on_change={e => handle_change ('regional_scope', e.target.value)}
              placeholder='Global / Africa / LATAM / APAC / EU / ...';
            />;
          </div>;
          <div>;
            <label className='block text - sm font - medium'>;
              Budget / Resolution goals;
            </label>;
            <textarea;
              className='w - full border rounded px - 3 py - 2 min - h-[80px]';
              value={form.budgetOrGoals}
              on_change={e => handle_change ('budgetOrGoals', e.target.value)}
              placeholder='$5M for pilot; goals: 10k workers onboarded, 70% female youth, etc.';
            />;
          </div>;
          <div>;
            <label className='block text - sm font - medium'>;
              Supporting multiverse (s)</label>;
            <input;
              className='w - full border rounded px - 3 py - 2';
              value={form.supporting_multiverses}
              on_change={e =>;
                handle_change ('supporting_multiverses', e.target.value)}
              placeholder='Eg. Zion.ai, Zion.ID, Zion.Work';
            />;
          </div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
            <div>;
              <label className='block text - sm font - medium'>Language</label>;
              <input;
                className='w - full border rounded px - 3 py - 2';
                value={form.language}
                on_change={e => handle_change ('language', e.target.value)}
                placeholder='English / French / Spanish / Arabic / ...';
              />;
            </div>;
            <div>;
              <label className='block text - sm font - medium'>;
                GPT Prompt Assist;
              </label>;
              <textarea;
                className='w - full border rounded px - 3 py - 2 min - h-[80px]';
                value={form.custom_prompt}
                on_change={e => handle_change ('custom_prompt', e.target.value)}
              />;
            </div>;
          </div>;
          <div className='flex gap - 2'>;
            <button;
              className='px - 4 py - 2 bg - blue - 600 text - white rounded disabled:opacity - 50'              on_click={handle_generate}            <input;
              className="w - full border rounded px-3 py-2";
              value={form.regional_scope}
              on_change={(e) => handle_change ('regional_scope', e.target.value)}
              placeholder="Global / Africa / LATAM / APAC / EU / ...";
            />;
          </div>;
          <div>;
            <label className="block text-sm font-medium" html_for="input - Budget / Resolution goals">Budget / Resolution goals</label>;
            <textarea;
              className="w - full border rounded px - 3 py-2 min-h-[80px]";
              value={form.budgetOrGoals}
              on_change={(e) => handle_change ('budgetOrGoals', e.target.value)}
              placeholder="$5M for pilot, goals: 10k workers onboarded, 70% female youth, etc.";
            />;
          </div>;
          <div>;
            <label className="block text-sm font-medium" html_for="input - Supporting multiverse (s)">Supporting multiverse (s)</label>;
            <input;
              className="w - full border rounded px-3 py-2";
              value={form.supporting_multiverses}
              on_change={(e) => handle_change ('supporting_multiverses', e.target.value)}
              placeholder="Eg. Zion.ai, Zion.ID, Zion.Work";
            />;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols-2 gap-4">;
            <div>;
              <label className="block text-sm font-medium" html_for="input - Language">Language</label>;
              <input;
                className="w - full border rounded px-3 py-2";
                value={form.language}
                on_change={(e) => handle_change ('language', e.target.value)}
                placeholder="English / French / Spanish / Arabic / ...";
              />;
            </div>;
            <div>;
              <label className="block text-sm font-medium" html_for="input - GPT Prompt Assist">GPT Prompt Assist</label>;
              <textarea;
                className="w - full border rounded px - 3 py-2 min-h-[80px]";
                value={form.custom_prompt}
                on_change={(e) => handle_change ('custom_prompt', e.target.value)}
              />;
            </div>;
          </div>;
          <div className="flex gap-2">;
            <button;
              className="px - 4 py - 2 bg - blue - 600 text-white rounded disabled:opacity-50";
              on_click={handle_generate}
              disabled={is_generating}
            >;
              {is_generating ? 'Generating...' : 'Generate Draft'}
            </button>;
            <button;
              className='px - 4 py - 2 bg - emerald - 600 text - white rounded'              on_click={handle_export}              className="px - 4 py - 2 bg - emerald-600 text-white rounded";
              on_click={handle_export}
              disabled={!draft_markdown}
            >;
              Export (PDF / JSON / MD)</button>;
            <button;
              className='px - 4 py - 2 bg - purple - 600 text - white rounded'              on_click={handleSubmitBridge}              className="px - 4 py - 2 bg - purple-600 text-white rounded";
              on_click={handleSubmitBridge}
              disabled={!draft_markdown}
            >;
              Submit Bridge;
            </button>;
          </div>;
          {status_message && (<p className='text - sm text - gray - 600'>{status_message}</p>)}
          {export_links && (<div className='text - sm space - y-1'>;
              {export_links.pdf_url && (<div>;
                  <a;
                    className='text - blue - 600 underline';
                    href={export_links.pdf_url}
                    target='_blank';
                    rel='noreferrer';
                  >;
                    PDF;
                  </a>                </div>)}
              {export_links.md_url && (<div>          {export_links && (<div className="text-sm space-y-1">;
              {export_links.pdf_url && (<div>;
                  <a className="text-blue-600 underline" href={export_links.pdf_url} target="_blank" rel="noreferrer">PDF</a>;
                </div>)}
              {export_links.md_url && (<div>;
                  <a;
                    className='text - blue - 600 underline';
                    href={export_links.md_url}
                    target='_blank';
                    rel='noreferrer';
                  >;
                    Markdown;
                  </a>                </div>)}
              {export_links.json_url && (<div>                  <a className="text-blue-600 underline" href={export_links.md_url} target="_blank" rel="noreferrer">Markdown</a>;
                </div>)}
              {export_links.json_url && (<div>;
                  <a;
                    className='text - blue - 600 underline';
                    href={export_links.json_url}
                    target='_blank';
                    rel='noreferrer';
                  >;
                    JSON;
                  </a>                </div>                  <a className="text-blue-600 underline" href={export_links.json_url} target="_blank" rel="noreferrer">JSON</a>;
                </div>)}
            </div>)}
        </div>;
        <div className='space - y-2'>;
          <label className='block text - sm font - medium'>Draft (Markdown)</label>;
          <textarea;
            className='w - full border rounded px - 3 py - 2 min - h-[520px] font - mono';
            value={draft_markdown}
            on_change={e => setDraftMarkdown (e.target.value)}          />          <textarea;
            className="w - full border rounded px - 3 py - 2 min-h-[520px] font-mono";
            value={draft_markdown}
            on_change={(e) => setDraftMarkdown (e.target.value)}
          />;
        </div>;
      </div>;
    </div>);

<<<<<<< HEAD
}
    </div>)}
  )
}
=======
);
}
}
<<<<<<< HEAD

=======
<div> <label className="block text-sm font-medium" >Target institution</label> <input /> </div> <div> <label className="block text-sm font-medium" >Type</label> <select > <option>Workforce Dev</option> <option>AI Ethics</option> <option>Digital ID</option> <option>Education</option> </select> </div> <div> <label className="block text-sm font-medium" >Regional scope</label> <input /> </div> <div> <label className="block text-sm font-medium" >Budget / Resolution goals</label> <textarea block text-sm font-medium">Supporting multiverse (s) </label> <input /> </div> <div className=" grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label className=" block text-sm font-medium">Language</label> <input /> </div> <div> <label className=" block text-sm font-medium">GPT Prompt Assist</label> <textarea /> </div> </div> <div className=" flex gap-2"> <button > {
  isGenerating ? 'Generating...' : 'Generate Draft' 
}</button> <button > Export (PDF/JSON/MD) </button> <button > Submit Bridge </button> </div> {
  exportLinks.pdfUrl && (<div> <a className=" text-blue-600 underline"href= {
  exportLinks.pdfUrl 
}target=" blank"rel=" noreferrer">PDF</a> </div>) 
}{
  exportLinks.mdUrl && (<div> <a className=" text-blue-600 underline"href= {
  exportLinks.mdUrl 
}target=" blank"rel=" noreferrer">Markdown</a> </div>) 
}{
  exportLinks.jsonUrl && (<div> <a className=" text-blue-600 underline"href= {
  exportLinks.jsonUrl 
}target=" blank"rel=" noreferrer">JSON</a> </div>) 
}</div>) 
}</div> <div className=" space-y-2"> <label className=" block text-sm font-medium" >Draft (Markdown) </label> <textarea /> </div> </div> </div>) 
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
