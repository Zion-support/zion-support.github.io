  const [currentCost, setCurrentCost] = useState(100000);
  const [efficiencyGain, setEfficiencyGain] = useState(70);
  const [timeframe, setTimeframe] = useState(12);
  
    const annualSavings = (currentCost * efficiencyGain) / 100;
    const totalSavings = annualSavings * (timeframe / 12);
    const roi = ((totalSavings - currentCost) / currentCost) * 100;
    return Math.max(0, roi);
  };
  const roi = calculateROI();
    <section className='bg-white py-16 rounded-2xl shadow-lg'></section>
      <>div className='container mx-auto px-4'></div>
        <h2 className='text-4xl font-bold text-center text-gray-900 mb-8'></h2>
          AI ROI Calculator;
        </h2>
        <div className='max-w-4xl mx-auto'></div><div className='grid md:grid-cols-2 gap-8'></div></>
            <>div className='space-y-6'></div><div></div></>
                <label className='block text-sm font-medium text-gray-700 mb-2'></label>
                  Current Annual Cost ($)
                </label>
                
                  onChange={e => setCurrentCost(Number(e.target.value))}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>
              <>div></div>
                <label className='block text-sm font-medium text-gray-700 mb-2'></label>
                  Expected Efficiency Gain (%)
                </label>
                
                  onChange={e => setEfficiencyGain(Number(e.target.value))}
                  className='w-full'
                />
                <div className='text-center text-sm text-gray-600'></div>
                  {efficiencyGain}%
                </div><div></div></>
                <label className='block text-sm font-medium text-gray-700 mb-2'></label>
                  Implementation Timeframe (months)
                </label>
                
                  onChange={e => setTimeframe(Number(e.target.value))}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                >
                  <option value={6}>6 months</option>
                  <option value={12}>12 months</option>
                  <option value={18}>18 months</option>
                  <option value={24}>24 months</option>
                </select>
              </div>
            <>div className='bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl'></div>
              <h3 className='text-2xl font-bold text-gray-900 mb-6 text-center'></h3>
                Your ROI Projection;
              </h3>
              <div className='text-center'></div><div className='text-6xl font-bold text-blue-600 mb-4'></div></>
                  {roi.toFixed(0)}%
                </div>
                <p className='text-gray-600 text-sm'></p>
                  Expected return on investment over {timeframe} months;
                </p>
              </div>
          </div>
      </div>
    </section>
  );
};
export default InteractiveAIROICalculator;

      </div></div></div></div>