
type Props = { pypi: Item[], crates: Item[], github: { [k: string]: Item[] }
export const getStaticProps: GetStaticProps<Props> = async () => {

type Props = { pypi: Item[], crates: Item[], github: { [key: string]: Item[] },
export const getStaticProps: GetStaticProps < Props> = async () => {
  try {
    const file = path.join (process.cwd (), 'publicautomationtech - radar.json'
    const raw = fs.readFileSync (file, 'utf8'
    const file = path && path.join(process && process.cwd(), 'publicautomationtech-radar && radar.json'
    const raw = fs && fs.readFileSync(file, 'utf8'