const coverPreview = useMemo ( () => {
  return (<img alt="ISBN barcode" className="h-16" src= {
  `/api/barcode/isbn?code=$ {
  encodeURIComponent (project.meta.isbn) 
}` 
}/> </div>) : null 
}</div> </div>) 
}, [project])
> <option value="LETTER" >8.5x11 Letter</option> <option value="A4" >A4</option> </select> </button> </div> </div> <section className="grid grid-cols-1 lg:grid-cols-2 gap-6" > <div className="space-y-4" > <h2 className="font-semibold flex items-center gap-2" > <BookOpen className="w-4 h-4" /> Cover & Branding </h2> <div className="grid grid-cols-1 md:grid-cols-2 gap-3" > <label className="space-y-1" > <div className="text-xs uppercase opacity-60" >Title</div> <input /> </label> <label className="space-y-1" > <div className="text-xs uppercase opacity-60" >Subtitle</div> <input /> </label> <label className="space-y-1" > <div className="text-xs uppercase opacity-60" >Author</div> <input /> </label> <label className="space-y-1" > <div className="text-xs uppercase opacity-60" >ISBN (optional) </div> <input </div> <div className="space-y-4" > <h2 className="font-semibold flex items-center gap-2" > <Settings className="w-4 h-4" /> Visual Elements </h2> </div>) ) 
}</div> </div> </div> </section> 
}
<<<<<<< HEAD
=======
}/> </div>) ) 
}</div> </section> 
}
}placeholder="Attribution" /> <div /> </div>) ) 
}</div> </section> </div>) 
}
<<<<<<< HEAD:temp_backup/components/book/BookBuilder.tsx


=======
import React, { useMemo, useState } from 'react'
import { Download, Image as ImageIcon, FileType, BookOpen, Settings, Wand2  } from 'lucide-react'
import { buildPrintableHtml  } from '../../utils/export/buildHtml'
import type { BookProject, BookChapter, VisualAsset } from '../../utils/book/bookTypes'
import { defaultChapters } from '../../utils/book/defaultOutline'
const initialProject: BookProject
                  setProject({ ...project, visuals: { ...project.visuals, quoteCallouts } })
                }
                placeholder="Attribution"
              />
              <div />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
<<<<<<< HEAD:components/book/BookBuilder.tsx
}
=======
};
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621:components/book/BookBuilder.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts:temp_backup/components/book/BookBuilder.tsx
>>>>>>> origin/cursor/delete-old-data-records-6bba:components/book/BookBuilder.tsx
