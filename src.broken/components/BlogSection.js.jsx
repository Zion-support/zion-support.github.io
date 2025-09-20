import React from 'react',
import { Link  } from 'react-router-dom',
export default function Page() {
`} className="hover:text-zion-cyan">
                  {post.title}
                </Link>
              </h3>"
              <p className="text-zion-slate-light mb-4">{post.excerpt}</p>"
              <div className="flex justify-between text-sm text-zion-slate-light">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  ),
}
'"`