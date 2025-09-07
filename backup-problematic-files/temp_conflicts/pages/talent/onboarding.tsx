import { useMemo, useState } from 'react',;''
import { motion, AnimatePresence } from 'framer-motion',;'
;
interface FileData {;
  name:string,;
  type:string,;
  size:number,;
  base64:string, // data URL;
}
;
interface OnboardingFormData {;
  fullName:string,;
  professionalTitle:string,;
  profilePicture?:FileData | null,;
;
  bio:string,;
  projects:string,;
  yearsOfExperience:string, // keep as string for input, convert on submit;
;
  skills:string,;
  tools:string,;
;'
  availability:'Full-time' | 'Part-time' | 'Project-based' | '',;'
  timezone:string,;
  hourlyRate?:string,;
  portfolioLinks?:string,;
  cvFile?:FileData | null;
}
;
const steps = [;'
  'Basic InfoExperience',;']'
  'Skills & TechAvailability'] as const,;'
;
type StepKey = typeof steps[number],;
;
const containerVariants = {;
  initial:{ opacity:0, y:16 },;
  animate:{ opacity:1, y:0 },;
  exit:{ opacity:0, y:-16 }},;
;
function useInitialFormState():OnboardingFormData {;
  return {;'
    fullName:'',;''
    professionalTitle:'',;'
    profilePicture:null,;'
    bio:'',;''
    projects:'',;''
    yearsOfExperience:'',;''
    skills:'',;''
    tools:'',;''
    availability:'',;''
    timezone:'',;''
    hourlyRate:'',;''
    portfolioLinks:'',;'
    cvFile:null},;
}
;
async function fileToBase64(file:File):Promise<FileData> {;
</FileData>
    new Promise<string>((resolve, reject) => {;
</string>
  const [formData, setFormData] = useState<OnboardingFormData>(useInitialFormState),;
</OnboardingFormData>
  const [errorMessage, setErrorMessage] = useState<string | null>(null),;
</string>
    if (stepIndex < steps.length - 1) setStepIndex(stepIndex + 1),;
  }
  function prevStep() {;
    if (stepIndex > 0) setStepIndex(stepIndex - 1),;
  }
;
  function update<K extends keyof OnboardingFormData>(key:K, value:OnboardingFormData[K]) {;
</K>'
      <div className="min-h-screen bg-high-contrast-primary text-high-contrast flex items-center justify-center p-6">;"
</div>"
        <div className="max-w-xl w-full bg-glass/60 rounded-2xl p-8 shadow-xl border border-[var(--border-primary)] animate-fade-in">;"
</div>"
          <div className="text-center space-y-3">;"
</div>
          </div>;
        </div>;
      </div>;"
    <div className="min-h-screen bg-high-contrast-primary text-high-contrast flex items-center justify-center p-4 md:p-8">;"
</div>"
      <div className="w-full max-w-3xl">;"
</div>"
        <div className="mb-6">;"
</div>"
          <h1 className="text-2xl md:text-3xl font-semibold">Zion AI Marketplace:Talent Onboarding</h1>;""
          <p className="text-high-contrast-muted mt-1">Create your public profile in a few quick steps.</p>;"
        </div>;"
        <div className="w-full h-2 bg-[var(--border-secondary)] rounded-full overflow-hidden mb-6">;"
</div>"
          <div className="h-full bg-[var(--text-accent)] transition-all duration-500" style={{ width:`${progressPercent}%` }} />;"
</div>
        </div>;"
          <div className="mb-4 rounded-lg border border-[var(--border-error)] text-high-contrast-error px-4 py-3 bg-[rgba(239,68,68,0.1)]">;"
</div>
          </div>;"
        <div className="bg-glass/60 rounded-2xl p-6 md:p-8 shadow-xl border border-[var(--border-primary)]">;"
</div>"
          <AnimatePresence mode="wait">;"
</AnimatePresence>"
              <motion.div key="step-basic" variants={containerVariants} initial="initial" animate="animate" exit="exit" transition={{ duration:0.3 }}>;"
</motion>"
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">;"
</div>
                  <FloatingInput;"
                    id="fullName";""
                    label="Full Name";"
                    value={formData.fullName}"
                    onChange={(v) => update('fullName', v)}'
</FloatingInput>
                  <FloatingInput;'
                    id="professionalTitle";""
                    label="Professional Title";""
                    placeholder="e.g., AI Developer, Network Engineer";"
                    value={formData.professionalTitle}"
                    onChange={(v) => update('professionalTitle', v)}'
</FloatingInput>
                </div>;'
                <div className="mt-6">;"
</div>
                  <FileUpload;"
                    id="profilePicture";""
                    label="Profile Picture (optional)";""
                    accept="image/*";"
                    fileData={formData.profilePicture}"
                    onFileChange={(f) => update('profilePicture', f)}'
</FileUpload>
                </div>;
              </motion.div>;
            )}
;'
            {currentStep === 'Experience' && (;''
              <motion.div key="step-experience" variants={containerVariants} initial="initial" animate="animate" exit="exit" transition={{ duration:0.3 }}>;"
</motion>"
                <div className="grid grid-cols-1 gap-4 md:gap-6">;"
</div>
                  <FloatingTextarea;"
                    id="bio";""
                    label="Short Bio or Work History";"
                    value={formData.bio})"
                    onChange={(v) => update('bio', v)}'
</FloatingTextarea>
                  <FloatingTextarea;'
                    id="projects";""
                    label="Key Projects or Roles (optional)";""
                    placeholder="Use bullets or short lines";"
                    value={formData.projects}"
                    onChange={(v) => update('projects', v)}'
</FloatingTextarea>
                  <FloatingInput;'
                    id="yearsOfExperience";""
                    label="Years of Experience";""
                    type="number";"
                    min={0}
                    value={formData.yearsOfExperience}"
                    onChange={(v) => update('yearsOfExperience', v)}'
</FloatingInput>
                </div>;
              </motion.div>;
            )}
;'
            {currentStep === 'Skills & Tech' && (;''
              <motion.div key="step-skills" variants={containerVariants} initial="initial" animate="animate" exit="exit" transition={{ duration:0.3 }}>;"
</motion>"
                <div className="grid grid-cols-1 gap-4 md:gap-6">;"
</div>
                  <FloatingInput;"
                    id="skills";")"
                    label="Skills (comma-separated)";""
                    placeholder="e.g., Python, LLMs, Kubernetes";"
                    value={formData.skills}"
                    onChange={(v) => update('skills', v)}'
</FloatingInput>
                  <FloatingInput;'
                    id="tools";""
                    label="Tools/Platforms (optional, comma-separated)";""
                    placeholder="e.g., AWS, GCP, Docker, Snowflake";"
                    value={formData.tools}"
                    onChange={(v) => update('tools', v)}'
</FloatingInput>
                </div>;
              </motion.div>;
            )}
;'
            {currentStep === 'Availability' && (;''
              <motion.div key="step-availability" variants={containerVariants} initial="initial" animate="animate" exit="exit" transition={{ duration:0.3 }}>;"
</motion>"
                <div className="grid grid-cols-1 gap-4 md:gap-6">;"
</div>
                  <div>;
</div>"
                    <label htmlFor="availability" className="block text-sm mb-2 text-high-contrast-secondary">Current Availability</label>;"
                    <select;"
                      id="availability";")"
                      className="w-full rounded-lg bg-high-contrast-tertiary/50 border border-[var(--border-secondary)] px-4 py-3 outline-none focus:ring-2 focus:ring-[var(--focus-ring)]";"
                      value={formData.availability}"
                      onChange={(e) => update('availability', e.target.value as OnboardingFormData['availability'])}'
</select>'
                      <option value="">Select...</option>;""
                      <option value="Full-time">Full-time</option>;""
                      <option value="Part-time">Part-time</option>;""
                      <option value="Project-based">Project-based</option>;"
                    </select>;
                  </div>;
                  <FloatingInput;"
                    id="timezone";""
                    label="Preferred Timezone";""
                    placeholder="e.g., UTC-5, PST, CET";"
                    value={formData.timezone}"
                    onChange={(v) => update('timezone', v)}'
</FloatingInput>
                  <FloatingInput;'
                    id="hourlyRate";""
                    label="Hourly Rate (optional)";""
                    type="number";"
                    min={0}"
                    value={formData.hourlyRate || ''}''
                    onChange={(v) => update('hourlyRate', v)}'
</FloatingInput>
                  <FloatingInput;'
                    id="portfolioLinks";""
                    label="Portfolio Links (optional)";""
                    placeholder="e.g., https://github.com/you, https://your-site.com";""
                    value={formData.portfolioLinks || ''}''
                    onChange={(v) => update('portfolioLinks', v)}'
</FloatingInput>
                  <FileUpload;'
                    id="cvFile";""
                    label="Upload CV (optional)";""
                    accept=".pdf,.doc,.docx,.txt,.rtf,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";"
                    fileData={formData.cvFile}"
                    onFileChange={(f) => update('cvFile', f)}'
</FileUpload>
                </div>;
              </motion.div>;
            )}
          </AnimatePresence>;'
          <div className="mt-8 flex items-center justify-between">;"
</div>
            <button;"
              type="button";""
              className="px-4 py-2 rounded-lg border border-[var(--border-secondary)] text-high-contrast-secondary hover:bg-high-contrast-tertiary/60 transition-colors";"
              onClick={prevStep}
              disabled={stepIndex === 0}
            >;
</button>
            </button>;
            {stepIndex < steps.length - 1 ? (;
              <button;"
                type="button";")"
                className="px-6 py-2 rounded-lg bg-[var(--text-accent)] text-black font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-50";"
                onClick={() => {;
</button>
              </button>;
              <button;"
                type="button";""
                className="px-6 py-2 rounded-lg bg-[var(--text-accent)] text-black font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-50";"
                onClick={handleSubmit}
                disabled={submitting}
              >;
</button>
              </button>;
          </div>;
        </div>;
      </div>;
    </div>;"
    <div className="relative">;"
</div>
      <input;
        id={id}
        name={id}
        type={type}
        min={min}
        value={value}
        onChange={(e) => onChange(e.target.value)}
</input>"
      <label htmlFor={id} className="absolute left-4 top-2 text-xs text-high-contrast-muted">;"
</label>
      </label>;
    </div>;"
    <div className="relative">;"
</div>
      <textarea;
        id={id}
        name={id}
        rows={6}
        value={value}
        onChange={(e) => onChange(e.target.value)}
</textarea>"
      <label htmlFor={id} className="absolute left-4 top-2 text-xs text-high-contrast-muted">;"
</label>
      </label>;
    </div>;
  const [localError, setLocalError] = useState<string | null>(null),;
</string>
    <div>;
</div>"
      <label htmlFor={id} className="block text-sm mb-2 text-high-contrast-secondary">{label}</label>;"
      <input;
        id={id}"
        type="file";"
        accept={accept}"
        className="block w-full text-sm text-high-contrast-secondary file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[var(--text-accent)] file:text-black hover:file:bg-[var(--text-accent)]/90";"
        onChange={async (e) => {;
</input>"
        <p className="mt-2 text-xs text-high-contrast-muted">Selected:{fileData.name} ({Math.round((fileData.size / 1024) * 10) / 10} KB)</p>;""
        <p className="mt-1 text-xs text-high-contrast-error">{localError}</p>;"
    </div>;"