                  </label>
                  <input type="text" value={nftForm.name} onChange = { (e) => setNftForm(prev => ({ ...prev,
  name: e.target.value
                  <textarea value={nftForm.description} onChange = { (e) => setNftForm(prev => ({ ...prev,
  description: e.target.value
                <div>
                  <label className="block text-sm font - medium text-gray - 700 dark:text-gray - 300 mb-1">
                    Image URL(optional) </label>
                  <input type="url" value={nftForm.image} onChange = { (e) => setNftForm(prev => ({ ...prev,
  image: e.target.value
                  </label>
                  <input type="text" value={transactionForm.to} onChange = { (e) => setTransactionForm(prev => ({ ...prev,
  to: e.target.value
                <div>
                  <label className="block text-sm font - medium text-gray - 700 dark:text-gray - 300 mb-1">
                    Amount(ETH) </label>
                  <input type="number" step="0.001" value={transactionForm.value} onChange = { (e) => setTransactionForm(prev => ({ ...prev,
  value: e.target.value
                <div>
                  <label className="block text-sm font - medium text-gray - 700 dark:text-gray - 300 mb-1">
                    Data(optional) </label>
                  <textarea value={transactionForm.data} onChange = { (e) => setTransactionForm(prev => ({ ...prev,
  data: e.target.value
