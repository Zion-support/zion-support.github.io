<<<<<<< HEAD
<<<<<<< HEAD
import { Input } from "@/components/ui/input",
import { SearchIcon } from 'lucide-react'
import { SearchFilterProps } from "@/types/filters",
=======
import { Input } from &quot;@/components/ui/input&quot;;
import { SearchIcon } from 'lucide-react'
import { SearchFilterProps } from &quot;@/types/filters&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export function SearchFilter({ searchTerm, setSearchTerm }: SearchFilterProps) {
  return (
    <div className=&quot;mb-6&quot;>
      <div className=&quot;relative&quot;>
        <label htmlFor=&quot;talent-search&quot; className=&quot;sr-only&quot;>
=======

export function SearchFilter(_{_searchTerm, _setSearchTerm}: SearchFilterProps) {_return (_<div className="mb-6">
      <div className="relative">
        <label htmlFor="talent-search" className="sr-only">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          Search talents
        </label>
        <SearchIcon className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light&quot; aria-hidden=&quot;true&quot; />
        <Input
          id=&quot;talent-search&quot;
          type=&quot;text&quot;
          placeholder=&quot;Search talents...&quot;
          value={searchTerm}
<<<<<<< HEAD
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-describedby=&quot;talent-search-help&quot;
          className=&quot;pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light&quot;
=======
          onChange={_(e) => setSearchTerm(e.target.value)}
          aria-describedby="talent-search-help"
          className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder-zion-slate-light"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        />
        <p id=&quot;talent-search-help&quot; className=&quot;sr-only&quot;>
          Type a name or skill to filter results
        </p>
      </div>
    </div>
  )
}
