  const [current Cost, set Current Cost] = use State(100000);
  const [efficiency Gain, set Efficiency Gain] = use State(70);
  const [timeframe, set Timeframe] = use State(12);
  
    const annual Savings = (current Cost * efficiency Gain) / 100;
    const total Savings = annual Savings * (timeframe / 12);
    const roi = ((total Savings - current Cost) / current Cost) * 100;
    return Math.max(0, roi);
  };
  const roi = calculate RO I();
    <s ection class Name='bg-white py-16 rounded-2xl shadow-lg'>
      <d iv class Name='container mx-auto px-4'>
        <h2 c lass Name='text-4xl font-bold text-center text-gray-900 mb-8'>
          A I R OI Calculator
        </h2>
        <d iv class Name='max-w-4xl mx-auto'>
          <d iv class Name='grid md:grid-cols-2 gap-8'>
            <d iv class Name='space-y-6'>
              <d iv>
                <l abel class Name='block text-sm font-medium text-gray-700 mb-2'>
                  Current Annual Cost ($)
                </l abel>
                
                  on Change={e => set Current Cost(Number(e.target.value))}
                  class Name='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </d iv>
              <d iv>
                <l abel class Name='block text-sm font-medium text-gray-700 mb-2'>
                  Expected Efficiency Gain (%)
                </l abel>
                
                  on Change={e => set Efficiency Gain(Number(e.target.value))}
                  class Name='w-full'
                />
                <d iv class Name='text-center text-sm text-gray-600'>
                  {efficiency Gain}%
                </d iv>
              <d iv>
                <l abel class Name='block text-sm font-medium text-gray-700 mb-2'>
                  Implementation Timeframe (months)
                </l abel>
                
                  on Change={e => set Timeframe(Number(e.target.value))}
                  class Name='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                >
                  <o ption value={6}>6 months</o ption>
                  <o ption value={12}>12 months</o ption>
                  <o ption value={18}>18 months</o ption>
                  <o ption value={24}>24 months</o ption>
                </s elect>
              </d iv>
            <d iv class Name='bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl'>
              <h3 c lass Name='text-2xl font-bold text-gray-900 mb-6 text-center'>
                Your R OI Projection
              </h3>
              <d iv class Name='text-center'>
                <d iv class Name='text-6xl font-bold text-blue-600 mb-4'>
                  {roi.to Fixed(0)}%
                </d iv>
                <p c lass Name='text-gray-600 text-sm'>
                  Expected return on investment over {timeframe} months
                </p>
              </d iv>
          </d iv>
      </d iv>
    </s ection>
  );
};
export default Interactive AI RO ICalculator;
