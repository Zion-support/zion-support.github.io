<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport AnalyticsMonitor from ./AnalyticsMonitordescribe(AnalyticsMonitor,() => {it(renders without crashing,() => {", render(<AnalyticsMonitor />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<AnalyticsMonitor />);
=======
import { render,screen  } from "@testing-library/reactimport AnalyticsMonitor from ./AnalyticsMonitordescribe(AnalyticsMonitor,() => {it(renders without crashing,() => {", render(<AnalyticsMonitor />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<AnalyticsMonitor />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</AnalyticsMonitor /><//AnalyticsMonitor />