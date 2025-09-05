 > {
  copied ? 'Copied' : label 
}</button>) 
}</li>) ) 
}<li> <a href="#references" className="opacity-80 hover:opacity-100" >References</Link> </li> </ul> </aside> </div> </div> <p> {
  wiki.intro 
}</p> {
  wiki.sections.map ( (s) => (<section key= {
  s.id 
}id= {
  slugify (s.title) 
}> <h2> {
  s.title 
}</h2> {
  s.paragraphs.map ( (p, i) => (<p key= {
  i 
}> {
  p 
}</p>) ) 
}</section>) ) 
}<h2 id="references" >References</h2> <ol> {
  wiki.references.map ( (r, i) => (<li key= {
  i 
}> {
  r 
}</li>) ) 
}</ol> </div> </article> </div>) 
}