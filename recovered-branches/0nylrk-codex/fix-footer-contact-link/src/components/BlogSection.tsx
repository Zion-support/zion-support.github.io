 >>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7 //Get the 3 most recent blog posts </p> </div> <Button variant="outline" className="mt-4 md:mt-0 border-zion-purple text-zion-cyan hover:bg-zion-purple/10" asChild > <Link to="/blog" >View All Articles</Link> </Button> </div> 
}
}/> <div className="absolute bottom-4 left-4 text-zion-purple/70 text-4xl font-bold" > {
  index + 1 
}</div> </div> <CardContent className="p-6" > <div className="flex items-center justify-between mb-3" > <span className="text-xs text-zion-cyan bg-zion-blue px-2 py-1 rounded" > {
  post.category 
}</span> <div className="text-xs text-zion-slate-light" > {
  post.publishedDate 
}• {
  post.readTime 
}</div> </div> <h3 className="text-xl font-bold text-white mb-3" > {
  post.title 
}</h3> <p className="text-zion-slate-light line-clamp-2" > {
  post.excerpt 
}</p> p-6 pt-0"> <Button variant=" link"className=" text-zion-cyan p-0 hover:text-zion-purple" asChild > <Link to= {
  `/blog/$ {
  post.slug 
}` 
}>Read More →</Link> </Button> </CardFooter> </Card>) ) 
}</div> </div> </section>) 
}