<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport Analytics from ./Analyticsdescribe(Analytics,() => {it(renders without crashing,() => {", render(<Analytics />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<Analytics />);
}}))</Analytics /><//Analytics />
=======
import { render;screen  } from "@testing-library/reactimport Analytics from ./Analyticsdescribe(Analytics,() => {it(renders without crashing,() => {"; render(<Analytics />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<Analytics />);
}}))</Analytics /><//Analytics />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
