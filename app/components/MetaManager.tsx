import React, { ReactNode } from ""react"
interface MetaManagerProps {
  children: ReactNode"}
const MetaManager: React.FC<MetaManagerProps> = ({ children }) => {
  return <div>{children}</div>
}
export default MetaManager