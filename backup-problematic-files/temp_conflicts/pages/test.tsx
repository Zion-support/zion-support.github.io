import Head from 'next/head',;'
;
export default function TestPage() {;
  return (;
    <>;
      <Head>;
</Head>
        <title>Test Page - Zion App</title>;'
        <meta name="description" content="Test page to verify app functionality" />;"
</meta>
      </Head>;
      <div style={{;"
        minHeight:'100vh',;''
        display:'flex',;''
        flexDirection:'column',;''
        justifyContent:'center',;''
        alignItems:'center',;''
        padding:'2rem',;''
        fontFamily:'Arial, sans-serif',;''
        backgroundColor:'#f8f9fa';'
      }}>;
</div>
        <div style={{;'
          textAlign:'center',;''
          maxWidth:'600px',;''
          backgroundColor:'white',;''
          padding:'3rem',;''
          borderRadius:'12px',;')'
          boxShadow:'0 4px 6px -1px rgba(0, 0, 0, 0.1)';'
        }}>;
</div>'
          <h1 style={{ color:'#2563eb', marginBottom:'1rem' }}>;'
</h1>
          </h1>;'
          <p style={{ fontSize:'1.1rem', marginBottom:'2rem', color:'#374151' }}>;'
</p>
          </p>;'
          <div style={{ marginBottom:'2rem' }}>;'
</div>'
            <h3 style={{ color:'#059669', marginBottom:'1rem' }}>App Status:</h3>;''
            <ul style={{ textAlign:'left', listStyle:'none', padding:0 }}>;'
</ul>'
              <li style={{ padding:'0.5rem 0', borderBottom:'1px solid #e5e7eb' }}>;'
</li>
              </li>;
            </ul>;
          </div>;'
          <div style={{ marginBottom:'2rem' }}>;'
</div>'
            <h3 style={{ color:'#dc2626', marginBottom:'1rem' }}>If you see this page:</h3>;''
            <p style={{ color:'#6b7280' }}>;'
</p>
            </p>;
          </div>;'
          <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>;'
</div>
            <button ;'
              onClick={() => window.location.href = '/'}'
</button>
            </button>;
            <button ;'
              onClick={() => window.location.href = '/debug'}'
</button>
            </button>;
            <button ;
              onClick={() => window.location.reload()}
</button>
            </button>;
          </div>;'
          <div style={{ marginTop:'2rem', padding:'1rem', backgroundColor:'#f3f4f6', borderRadius:'0.5rem' }}>;'
</div>'
            <p style={{ fontSize:'0.9rem', color:'#6b7280', margin:0 }}>;'
</p>
              <strong>Timestamp:</strong> {new Date().toLocaleString()}
            </p>;'
            <p style={{ fontSize:'0.9rem', color:'#6b7280', margin:'0.5rem 0 0 0' }}>;'
</p>'
              <strong>Environment:</strong> {process.env.NODE_ENV || 'development'}'
            </p>;
          </div>;
        </div>;
      </div>;
    </>;
  ),;
}'