<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport AdvancedSearch from ./AdvancedSearchdescribe(AdvancedSearch,() => {it(renders without crashing,() => {", render(<AdvancedSearch />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<AdvancedSearch />);
=======
import { render,screen  } from "@testing-library/reactimport AdvancedSearch from ./AdvancedSearchdescribe(AdvancedSearch,() => {it(renders without crashing,() => {", render(<AdvancedSearch />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<AdvancedSearch />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</AdvancedSearch /><//AdvancedSearch />