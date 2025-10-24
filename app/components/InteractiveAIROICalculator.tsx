import React, { useState } from 'react'

const InteractiveAIROICalculator: React.FC = () => {
  const [currentCost, setCurrentCost] = useState(100000)
  const [efficiencyGain, setEfficiencyGain] = useState(70)
  const [timeframe, setTimeframe] = useState(12)
  
  const calculateROI = () => {
    const annualSavings = (currentCost * efficiencyGain) / 100
    const totalSavings = annualSavings * (timeframe / 12)
    const roi = ((totalSavings - currentCost) / currentCost) * 100
    return Math.max(0, roi)
  }
  
  const roi = calculateROI()
  
  return (
    <section className='bg-white py-16 rounded-2xl shadow-lg'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center text-gray-900 mb-8'>
          AI ROI Calculator
        </h2>
        <div className='max-w-4xl mx-auto'>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Current Annual Cost ($)
                </label>
                <input
                  type='number'
                  value={currentCost}
                  onChange={e => setCurrentCost(Number(e.target.value))}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Expected Efficiency Gain (%)
                </label>
                <input
                  type='range'
                  min='10'
                  max='90'
                  value={efficiencyGain}
                  onChange={e => setEfficiencyGain(Number(e.target.value))}
                  className='w-full'
                />
                <div className='text-center text-sm text-gray-600'>
                  {efficiencyGain}%
                </div>
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Timeframe (months)
                </label>
                <select
                  value={timeframe}
                  onChange={e => setTimeframe(Number(e.target.value))}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                >
                  <option value={6}>6 months</option>
                  <option value={12}>12 months</option>
                  <option value={18}>18 months</option>
                  <option value={24}>24 months</option>
                </select>
              </div>
            </div>
            
            <div className='bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6 text-center'>
                ROI Analysis
              </h3>
              <div className='space-y-4'>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-700'>Current Annual Cost:</span>
                  <span className='font-semibold'>${currentCost.toLocaleString()}</span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-700'>Expected Annual Savings:</span>
                  <span className='font-semibold text-green-600'>
                    ${((currentCost * efficiencyGain) / 100).toLocaleString()}
                  </span>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-700'>Total Savings ({timeframe} months):</span>
                  <span className='font-semibold text-green-600'>
                    ${(((currentCost * efficiencyGain) / 100) * (timeframe / 12)).toLocaleString()}
                  </span>
                </div>
                <div className='border-t pt-4'>
                  <div className='flex justify-between items-center'>
                    <span className='text-lg font-semibold text-gray-900'>ROI:</span>
                    <span className={`text-2xl font-bold ${roi > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {roi.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
              
              <div className='mt-6 text-center'>
                <button className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'>
                  Get Detailed Analysis
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveAIROICalculator