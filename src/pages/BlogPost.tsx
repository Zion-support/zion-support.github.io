 import ReactMarkdown from 'react-markdown';
//Importing the sample blog posts - in a real app, you would fetch this from an API p.id !== data.id && (p.category === data.category || p.tags.some ( (tag) => data.tags.includes (tag) ) ) p.id !== currentPost.id && (p.category === currentPost.category || p.tags.some ( (tag) => currentPost.tags.includes (tag) ) ) <p>Failed to load article.</p> <Button onClick={;
  () => router.reload () ;
}>Retry</Button> </div>) ;
}//If post is still null after loading, show not found <p>Article not found.</p> <Button onClick={';
  () => router.push ('/blog') ;
}>Back to Blog</Button> </div>) ;
}switch (platform) {';
  case 'facebook': return `https://www.facebook.com/sharer/sharer.php?u=$ {;
  url ;
}`;';
case 'twitter': ;
}
};
outline"className=" border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"asChild > <Link href=" /blog"> <ArrowLeft className=" mr-2 h-4 w-4"/> Back to all articles </Link> </Button> </div> </div> <div className=" relative"> <Button > <Share2 className=" h-4 w-4 mr-1"/> <span className=" text-sm">Share</span> </Button> <a href= {';
  getShareUrl ('facebook') ";
}target=" blank"rel=" noopener noreferrer"className=" flex items-center p-2 hover:bg-zion-blue rounded transition-colors text-zion-slate-light hover:text-white"aria-label=" Share on Facebook"title=" Share on Facebook"> <Facebook className=" h-4 w-4 mr-2"/> <span>Facebook</span> </Link> <a > <Twitter className=" h-4 w-4 mr-2"/> <span>Twitter</span> </Link> <a > <Linkedin className=" h-4 w-4 mr-2"/> <span>LinkedIn</span> </Link> </div>) ;
}</div> </div> </div> </div> /> </div> </div> <ReactMarkdown> {;
  post.content ;
}</ReactMarkdown> </div> <span key= {;
  tag ";
}className=" text-xs text-zion-slate-light bg-zion-blue-dark px-3 py-1 rounded-full"> # {;
  tag ;
}</span>) ) ";
}</div> <Separator className=" my-12 bg-zion-blue-light"/> > <div className=" aspect-[16/9] relative"> <ImageWithRetry </div> </Link>) ) ;
}</div> </div>) ";
}<Button asChild > <Link href=" /blog"> <ChevronLeft className=" mr-2 h-4 w-4" /> All Articles </Link> </Button> </div> </div> </div> </div> </>) ;
}'"