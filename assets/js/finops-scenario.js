'use strict';
const ZionFinopsScenario = {
    calculate(params) {
        const [revenue, growth, cogs, opex, years] = params;
        const results = [];
        for (let y = 0; y < years; y++) {
            const rev = revenue * Math.pow(1 + growth / 100, y);
            const profit = rev - cogs - opex;
            results.push(Math.round(profit));
        }
        return results;
    }
};
console.log('FinOps scenario estimator loaded');
