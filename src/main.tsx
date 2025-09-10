import { createRoot } from 'react-dom/client'
// eslint-disable-next-line no-unused-vars
import AppMinimal from './AppMinimal'

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(<AppMinimal />)
}