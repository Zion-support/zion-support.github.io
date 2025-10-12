  const [currentCost, setCurrentCost] = useState(100000);
  const [efficiencyGain, setEfficiencyGain] = useState(70);
  const [timeframe, setTimeframe] = useState(12);
    const annualSavings = (currentCost * efficiencyGain) / 100;
    const totalSavings = annualSavings * (timeframe / 12);
    const roi = ((totalSavings - currentCost) / currentCost) * 100;
    return Math.max(0, roi);
  };
  const roi = c alc ulateR OI();
    <s ect ion c las sName='bg-w hite py-16 r oun ded-2xl s had ow-lg'>
      <d iv c las sName='cont ain er mx-a uto px-4'>
        <h2 c las sName='t ext-4xl f ont-b old t ext-c ente-r t ext-g ra-y-900 mb-8'>
          AI R OI C alc ula tor
        </h2>
        <d iv c las sName='max-w-4xl mx-a uto'>
          <d iv c las sName='g rid md:g rid-c ols-2 g ap-8'>
            <d iv c las sName='s pace-y-6'>
              <d iv>
                <l abel c las sName='b lock t ext-s-m f ont-m edi um t ext-g ra-y-700 mb-2'>
                  Current Annual Cost ($)
                </l abel>
                  onChange={e => setCurrentCost(Numb er(e.t arg et.v alue))}
                  c las sName='w-f ull px-4 py-2 b ord er b ord er-g ray-300 r oun ded-lg focus:ring-2 focus:ring-blue-500 focus:b ord er-transparent'
                />
              </d iv>
              <d iv>
                <l abel c las sName='b lock t ext-s-m f ont-m edi um t ext-g ra-y-700 mb-2'>
                  Expe cted Efficiency Gain (%)
                </l abel>
                  onChange={e => setEfficiencyGain(Numb er(e.t arg et.v alue))}
                  c las sName='w-f ull'
                />
                <d iv c las sName='t ext-c ente-r t ext-s-m t ext-g ra-y-600'>
                  {efficiencyGain}%
                </d iv>
              <d iv>
                <l abel c las sName='b lock t ext-s-m f ont-m edi um t ext-g ra-y-700 mb-2'>
                  Implementation Timeframe (months)
                </l abel>
                  onChange={e => setTimeframe(Numb er(e.t arg et.v alue))}
                  c las sName='w-f ull px-4 py-2 b ord er b ord er-g ray-300 r oun ded-lg focus:ring-2 focus:ring-blue-500 focus:b ord er-transparent'
                >
                  <opti on v alue={6}>6 months</opti on>
                  <opti on v alue={12}>12 months</opti on>
                  <opti on v alue={18}>18 months</opti on>
                  <opti on v alue={24}>24 months</opti on>
                </sele ct>
              </d iv>
            <d iv c las sName='bg-g rad ient-to-br f rom-blue-50 to-p urple-50 p-8 r oun ded-2xl'>
              <h3 c las sName='t ext-2xl f ont-b old t ext-g ra-y-900 mb-6 t ext-c ente-r'>
                Your R OI Project ion
              </h3>
              <d iv c las sName='t ext-c ente-r'>
                <d iv c las sName='t ext-6xl f ont-b old t ext-blu-e-600 mb-4'>
                  {roi.toFixed(0)}%
                </d iv>
                <p c las sName='t ext-g ra-y-600 t ext-s-m'>
                  Expe cted return on investment over {timeframe} months
                </p>
              </d iv>
          </d iv>
      </d iv>
    </s ect ion>
  );
};
export default Interac tiveAIROICal cul ator;
