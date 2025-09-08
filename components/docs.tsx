      case 'Intermediate':;
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced':;

        return 'bg-red-500/20 text-red-400';

      default:;
        return 'bg-gray-500/20 text-gray-400';    }      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';

      case 'Advanced': return 'bg-red-500/20 text-red-400',;
      default: return 'bg-gray-500/20 text-gray-400';


        />;
        <link rel='canonical' href='https://ziontechgroup && ziontechgroup.com/docs' />;
      </Head>;
      <div className='min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8'>;
        <div className='max-w-6xl mx-auto space-y-10'>;
          <div className='text-center'>;
            <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
              Documentation;
            </h1>;
            <p className='text-slate-300 mt-4'>;
              Quick links, references, and integration guides for our services.;
            </p>;
          </div>;
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>;
            {sections && sections.map(s => (;




              <Card

                        {l.name}

          <div className=grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((s) => (
              <Card key={s.title} className="p-6 bg-black/40 border border-gray-700/50>
                <h2 className=text-xl font-semibold mb-4 text-white">{s.title}</h2>
                <ul className="space-y-2>
                  {s.links.map((l) => (
                    <li key={l.name}>
                      <a href={l.href} className=text-cyan-400 hover:underline">{l.name}</a>


<Card className='p-6 bg-black/40 border border-gray-700/50'    />
            <h2 className='text-xl font-semibold mb-4 text-white'    />
              External References;


                </li>              ))}

                Contact Support;
              </Button>;
              <Button;
                href={contact && contact.website}

                variant='outline';
                className='border-gray-600 text-gray-200'    />;
                Visit Website;
              </Button>;
              <a;
                className='text-cyan-400';
                href={`tel:${contact && contact.mobile.replace(/[^+\\d]/g, '')}`}    />;
                {contact && contact.mobile}
              </a>;
              <a className='text-purple-400' href={`mailto: ${contact && contact.email},
}    />;
                {contact && contact.email}
              </a>            </div>          <Card className=\"p-6 bg-black/40 border border-gray-700/50\"    />;
            <h2 className=\"text-xl font-semibold mb-4 text-white\"    />Need help?</h2>;
            <div className=\"flex flex-col sm:flex-row gap-3\"    />;
              <Button href=\"/contact\" className=\"bg-gradient-to-r from-cyan-600 to-blue-600 text-white\"    />Contact Support</Button>;
              <Button href={contact && contact.website} variant=\"outline\" className=\"border-gray-600 text-gray-200\"    />Visit Website</Button>;
              <a className=\"text-cyan-400\" href={`tel:${contact && contact.mobile.replace(/[^+\\d]/g, '')}`}    />{contact && contact.mobile}</a>;
              <a className=\"text-purple-400\" href={`mailto: ${contact && contact.email}`}    />{contact && contact.emai,}
}</a>;

          </Card>;
        </div>;
      </div>;
    </UltraAdvancedFuturisticBackground>;


  );
}
              ))}
            </ul>
          </Card>
          <Card className="p-6 bg-black/40 border border-gray-700/50">
            <h2 className="text-xl font-semibold mb-4 text-white">Need help?</h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/contact" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">Contact Support</Button>
              <Button href={contact.website} variant="outline" className="border-gray-600 text-gray-200">Visit Website</Button>
              <a className="text-cyan-400" href={`tel:${contact.mobile.replace(/[^+\\d]/g, '')}`}>{contact.mobile}</a>
              <a className="text-purple-400" href={`mailto:${contact.email}`}>{contact.email}</a>

                      </a>                    </li>      </Head>;

      <div className=\"min - h-screen pt - 24 pb - 20 px - 4 sm:px - 6 lg:px - 8\"    />;
        <div className=\"max - w-6xl mx - auto space - y-10\"    />;
          <div className=\"text - center\"    />;
            <h1 className=\"text - 4xl md:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent\"    />Documentation</h1>;
            <p className=\"text - slate - 300 mt - 4\"    />Quick links, references, and integration guides for our services.</p>;
          </div>;
          <div className=\"grid grid - cols - 1 md:grid - cols - 3 gap - 6\"    />;
            {sections.map ((s) => (<Card key={s.title} className=\"p - 6 bg - black / 40 border border - gray - 700 / 50\"    />;
                <h2 className=\"text - xl font - semibold mb - 4 text - white\"    />{s.title}</h2>;
                <ul className=\"space - y-2\"    />;
                  {s.links.map ((l) => (<li key={l.name}    />;
                      <a href={l.href} className=\"text - cyan - 400 hover: underline\"    />{l.nam,}
}</a>;


          <Card className='p - 6 bg - black / 40 border border - gray - 700 / 50'    />;
            <h2 className='text - xl font - semibold mb - 4 text - white'    />;


          <Card className=\"p - 6 bg - black / 40 border border - gray - 700 / 50\"    />;
            <h2 className=\"text - xl font - semibold mb - 4 text - white\"    />External References</h2>;
            <ul className=\"grid grid - cols - 1 md:grid - cols - 2 gap - 3 text - slate - 300\"    />;
              {external.map ((e) => (<li key={e.name}    /><a href={e.url} target=\"_blank\" rel=\"noopener noreferrer\" className=\"text - cyan - 400 hover: underline\"    />{e.nam,}
                href='/contact';
                className='bg - gradient - to - r from - cyan - 600 to - blue - 600 text - white'    />


                variant='outline';
                className='border - gray - 600 text - gray - 200'    />
              </a>








