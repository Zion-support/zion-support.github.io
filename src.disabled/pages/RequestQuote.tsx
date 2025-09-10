


const RequestQuote: React.FC = () => {
  return ('
    <div className='mx - auto max - w-3xl px - 4 py - 12>'
      <h1 className='text - 3xl font - bold text - gray - 900'>Request a Quote</h1>''
      <p className='mt - 4 text - gray - 700'>
        Tell us about your project. We will reach out with a tailored proposal.'
      </p>''
      <form className='mt - 8 space - y-4>
        <div>''
          <label className='block text - sm font - medium text - gray - 700'>Name</label>''
          <input className='mt - 1 w - full rounded - md border border - gray - 300 px - 3 py - 2' placeholder='Your name' / />
        </div>'
        <div>''
          <label className='block text - sm font - medium text - gray - 700'>Email</label>''
          <input type='email' className='mt - 1 w - full rounded - md border border - gray - 300 px - 3 py - 2' placeholder='you@example.com' / />
        </div>'
        <div>''
          <label className='block text - sm font - medium text - gray - 700'>Company</label>''
          <input className='mt - 1 w - full rounded - md border border - gray - 300 px - 3 py - 2' placeholder='Company name' / />
        </div>'
        <div>''
          <label className='block text - sm font - medium text - gray - 700'>Project details</label>''
          <textarea className='mt - 1 w - full rounded - md border border - gray - 300 px - 3 py - 2' rows={5} placeholder='Describe what you need' />
        </div>''
        <button aria-label='Button' type='submit' className='rounded - md bg - blue - 600 px - 5 py - 2.5 text - white hover: bg - blue - 700'>Submit</button>
      </form>
    </div>) }
  );
};