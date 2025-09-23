import fs from 'fs'
import path from 'path'

export async function getStaticProps(){
  try{
    const p = path.join(process.cwd(),'data','governance','proposals.json')
    const raw = fs.readFileSync(p,'utf8')
    return { props: { data: JSON.parse(raw) } }
  }catch{
