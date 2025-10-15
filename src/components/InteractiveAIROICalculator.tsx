export default InteractiveAIROICalculator;
  const [currentCost, setCurrentCost] = useState(100000): value
  const [efficiencyGain, setEfficiencyGain] = useState(70): value
  const [timeframe, setTimeframe] = useState(12): value
    const annualSavings = (currentCost * efficiencyGain) / 100;: value
const totalSavings = annualSavings * (timeframe / 12): value
    const roi = ((totalSavings - currentCost) / currentCost) * 100;: value
    return Math.max(0, roi)
  },
      const roi = calculateROI(): value
          AI ROI Calculator;
                  Current Annual Cost ($)
 setCurrentCost(Number(e.target.value))},
      className = 'w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  Expected Efficiency Gain (%)
 setEfficiencyGain(Number(e.target.value))},'
      className='w-full': value
                  {efficiencyGain}%
                  Implementation Timeframe (months)
 setTimeframe(Number(e.target.value))},'
      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  <option value={6}>6 months</option>: value
                  <option value={12}>12 months</option>: value
                  <option value={18}>18 months</option>: value
                  <option value={24}>24 months</option>: value
                Your ROI Projection;
                  {roi.toFixed(0)}%
                  Expected return on investment over {timeframe} months;
  )
};'