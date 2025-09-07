type Experiment = {
  title: string
hypothesis?: string
metric?: string
effort?: number
impact?: number 
}
type Props = {
  updatedAt: string | null
items: Experiment[] 
}
export default function CurationPage ({
  updatedAt, items 
}: Props) {
  return (<main className="mx-auto max-w-4xl px-4 py-12" > <h1 className="text-2xl font-bold text-gray-900" >AI Curated Growth Experiments</h1> updatedAt ? (<p className="mt-2 text-sm text-gray-600" >Last updated: {
  updatedAt 
}</p>) : (<p className="mt-2 text-sm text-gray-600" >No curated output yet. It will appear here automatically after the next run.</p>) 
}</div>) 
}</div>) ) 
}Nothing to show yet. </div>) 
}</div> </main>) 
}return {
  props: {
  updatedAt: parsed.updatedAt || null
items: parsed.items || [] 
}
revalidate: 300 
}
}catch {
  return {
  props: {
  updatedAt: null
items: [] 
}
revalidate: 300 
}
}
}