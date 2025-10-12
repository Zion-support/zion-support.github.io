export default InteractiveAIROICalculator;
  const [currentCost, setCurrentCost] = useState(100000);
  const [efficiencyGain, setEfficiencyGain] = useState(70);
  const [timeframe, setTimeframe] = useState(12);

    return Math.max(0, roi);
  };
  
          AI ROI Calculator;
                  Current Annual Cost ($)
                
 setCurrentCost(Number(e.target.value))}
                  className="'w-full" px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'

                  Expected Efficiency Gain (%)
                
 setEfficiencyGain(Number(e.target.value))}
                  className="'w-full'"

                  {efficiencyGain}%
                  Implementation Timeframe (months)
                
 setTimeframe(Number(e.target.value))}
                  className="'w-full" px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  <option value={6}>6 months</option>
                  <option value={12}>12 months</option>
                  <option value={18}>18 months</option>
                  <option value={24}>24 months</option>
                Your ROI Projection;
                  {roi.toFixed(0)}%
                  Expected return on investment over {timeframe} months;
  );
};
