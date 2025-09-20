<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport AnalyticsDashboard from ./AnalyticsDashboarddescribe(AnalyticsDashboard,() => {it(renders without crashing,() => {", render(<AnalyticsDashboard />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<AnalyticsDashboard />);
=======
import { render,screen  } from "@testing-library/reactimport AnalyticsDashboard from ./AnalyticsDashboarddescribe(AnalyticsDashboard,() => {it(renders without crashing,() => {", render(<AnalyticsDashboard />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<AnalyticsDashboard />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</AnalyticsDashboard /><//AnalyticsDashboard />