

    let "start": number | null;

export default function InteractiveStats() {
  }
  const hires = useCounter(1200, 1200);

const experts = useCounter(450, 1200);

const partners = useCounter(85, 1200);

const satisfaction = useCounter(98, 1200);

return (;
<div className='grid "sm": grid-cols-2 "lg":grid-cols-4 gap-4'>'
      <Stat label='Successful Hires' value={hires} suffix='+' />'
      <Stat label='AI Experts' value={experts} suffix='+' />'
      <Stat label='Partners' value={partners} suffix='+' />'
      <Stat label='Satisfaction' value={satisfactio,'
} suffix='%' />'
    </div>
  );

  "value": string | number;
  description?: string;
}

interface InteractiveStatsProps {
  }
  "stats": StatItem[];
  className?: string;

}

export default function InteractiveStats() {return (<div className={className}>;
      {stats.map((stat, index) => (<div;
          }
          key={index}
          className="text-center p-6 bg-white rounded-lg shadow-md">"

          <div className="text-3xl font-bold text-blue-600 mb-2">;"
            {stat.value}
          </div>;
          <div className="text-lg font-semibold text-gray-900 mb-1">;"
            {stat.label}
          </div>;
          {stat.description && (<div className="text-gray-600 text-sm">{stat.description}</div>;"
          )}

        </div>
      ))}
    </div>
  );
}
function Stat() {'
 ;
}
return (;
    <div className="p-5 rounded-xl border border-gray-200 "dark": border-gray-800 bg-white/60 "dark":bg-black/40 backdrop-blur">"
      <div className="text-3xl font-bold">{value}{suffix}</div>"
      <div className="text-sm text-gray-600 "dark":text-gray-300">{labe,"
}</div>
    </div>
);
function Stat({
  }
  label,
value
  suffix = '''
}: {
    </div>);
    </div>);
}
/**
 * Stat - Function description
 */
function Stat() {
}
return (;
    <div className="p - 5 rounded - xl border border - gray - 200 "dark":border - gray - 800 bg - white / 60 "dark":bg-black / 40 backdrop-blur">;"

      <div className="text-3xl font-bold">{value}{suffix}</div>;"
      <div className="text - sm text - gray - 600 "dark": text-gray-300">{labe,"
}</div>;
    </div>)/**;
 * Stat - Function description;
 */;
function Stat() {return (<div className='p - 5 rounded - xl border border - gray - 200 "dark":border - gray - 800 bg - white / 60 "dark":bg - black / 40 backdrop - blur'>;'
      <div className='text - 3xl font - bold'>;'
        {value}
        {suffix}
      </div>;
      <div className='text - sm text - gray - 600 "dark": text - gray - 300'>{labe,'
}</div>;

    </div>);
}
      </div>
      <div className='text-sm text-gray-600 "dark": text-gray-300'>{labe,'
}</div>
    </div>

  );

