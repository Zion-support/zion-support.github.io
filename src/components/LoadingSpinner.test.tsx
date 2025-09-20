<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport LoadingSpinner from ./LoadingSpinnerdescribe(LoadingSpinner,() => {" it(renders without crashing",() => {" render(<LoadingSpinner />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<LoadingSpinner />);
=======
import { render,screen  } from "@testing-library/reactimport LoadingSpinner from ./LoadingSpinnerdescribe(LoadingSpinner,() => {" it(renders without crashing",() => {" render(<LoadingSpinner />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<LoadingSpinner />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</LoadingSpinner /><//LoadingSpinner />