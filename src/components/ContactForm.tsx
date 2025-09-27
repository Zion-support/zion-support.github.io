 void;
	showTit, l, e?: boolean;

// TODO: Consider breaking this large component (250 lines) into smaller components
// TODO: Consider breaking this large component (249 lines) into smaller components
import { useMemouseCallback   } from "react";
import React{useState }  from "react";
interface, ContactFormProp, s {onSubm, i, t?: (data: any) => void;
	showTitle?: boolean;

	className?: string};
exportconstContactForm: React.FC<ContactFormProps> = ({onSubmitshowTitle = trueclassName = "'}) => {const [formDatasetFormData] = useState({
		name: ''email: ''company: ''phone: ''service: ''message: ''budget: ''timeline: '"});
	const [isSubmittingsetIsSubmitting] = useState(false);
	const [submitStatussetSubmitStatus] = useState<"idle' | "success" | "error">("idle");

	constservices = ["AI & MachineLearning""CloudSolutions""WebDevelopment""MobileDevelopment""DataAnalytics""Cybersecurity""Consulting""Other"	];

	constbudgets = ["Under $10K""$10K - $25K",
		"$25K - $50K",
		"$50K - $100K",
		"$100K - $250K",
		"$250K+"
	];

	consttimelines = ["ASAP""1-2months""3-6months""6-12months""12+ months""Flexible"];

	const, handleInputChang, e = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {handleInputChange.displayName = "handleInputChange";const { namevalue } = e.target;
		setFormDa, t, a(pr, e, v => ({...prev[name]: value		}))};

	const, handleSubmi, t = async(e: React.FormEve, n, t) => {e.preventDefault();
		setIsSubmitting(tr, u, e);
		t, r, y {
 setTimeout(resolve20, 0, 0));

 setTimeout(resolve2000));

			// SimulateA, P, I, callawaitnewPromise(resolve = > setTimeout(resolve2000));


			
			if (onSubmit) {
				onSubmit(formData)};
			setSubmitStatus("success");
			setFormData({name: "'email: ''company: ''phone: ''service: ''message: ''budget: ''timeline: '"
			})} catch (error) {setSubmitStatus("error")} final, ly {setIsSubmitting(false)}};
				<divclassName="w-20 h-20 bg-green-100, round, e, d-full, flex, items-center, justif, y-centermx-automb-6">
					<svgclassName="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="002424">
						<pathstrokeLinecap ="round" strokeLinejoin="round" strokeWidth={2} d="M513l  4, 4L197" />					</svg>
				</div>
				<h3className="text-2 xlfont-bold, text-green-800 mb-4" id="message-sent-successfully">MessageSentSuccessfully!</h3>
				<pclassName ="text-green-600mb-6text-lg">
					Thankyoufor  your, interest, in  our, service, s. We&ap, o, s;llget, backto, youwithin  24hourswithadetailedproposal.

	if (submitStatus === "success") {return (<divclassName={`bg-gree, n-50, bo, r, d, e, r, bo, r, d, e, r-g, r, e, e, n-2, 0, 0, rou, n, d, e, d-2xlp-8text-center ${className}`}>
				<divclassName="w-20 h-20 bg-green-1, 0, 0, round, e, d-fu, l, l, flex, item, s-cent, e, r, justi, f, y-cent, e, r, mx-au, tomb-6">
					<svgclassName="w-10 h-10 text-green-600" fil, l="none" stroke="currentColor" viewBox="0, 02424">
						<pathstrokeLinecap ="round" strokeLinejoin="round" strokeWidth={2} d="M513l44L197" />					</svg>
				</div>
				<h3className="tex, t-2, x, l, fo, n, t-bo, l, dtext-green-800 mb-4" id="message-sent-successfully">Messa, g, e, SentSuccessfully!</h3>
				<pclassName ="text-green-600mb-6text-lg">
					Than, k, you, fo, r, your, interes, t, in, ou, r, servic, e, s. We&ap, o, s;ll, get, backto, youwithin24hours withadetailedproposal.

				</p>


					SendAnotherMessage"> setSubmitStatus('id, l, e')};
					ar, i, a-lab, e, l="Send, another, message"
					className="bg-gre, e, n-600, hover:bg-gre, e, n-700, tex, t-white, p, x-8, p, y-3, rounde, d-lg, fon, t-medium, transitio, n-colors, duratio, n-2, 0, 0"				>
					Send, Another, Message
				</button>
			</div>
		)};
	return (<div, className={`bg-w, h, i, t, e, rou, n, d, e, d-2, x, l, shad, o, w-x, l, p-8 ${className}`}>

				<buttononClick ={() = aria-label="setSubmitStatus("idle")};
					ar, i, a-label="Sendanothermessage"
					className="bg-gre, e, n-600, hover:bg-gre, e, n-700, tex, t-white, p, x-8, p, y-3, rounde, d-lg, fon, t-medium, transitio, n-colorsduration-200"

				>
					Send, Another, Message"> setSubmitStatus("idle")};
					ar, i, a-label="Sendanothermessage"
					className="bg-gre, e, n-600, hover:bg-gre, e, n-700, tex, t-white, p, x-8, p, y-3, rounde, d-lg, fon, t-medium, transitio, n-colorsduration-200"				>					Send, Another, Message
				</button>
			</div>
		)};
	return (<divclassName={`bg-whit, e, rou, n, d, e, d-2, x, l, shad, o, w-xlp-8 ${className}`}>

			{showTitle && (

					<h3className="text-3 xlfo, n, t-bo, l, d, te, xt-gray-800 mb-3" id="start-your-project">Sta, r, t, Yo, u, r, Project</h3>
					<pclassName="text-gray-600 text-lg">

				<divclassName ="mb-8">
					<h3className="text-3 xl, fo, n, t-bo, l, dtext-gray-800 mb-3" id="start-your-project">Sta, r, t, Yo, u, r, Project</h3>
					<pclassName="text-gray-600 text-lg">
						Tell, us, abo, u, t, yo, u, r, proje, c, t, a, n, d, we&ap, o, s;ll, provi, d, e, a, detail, e, d, propos, a, l, tailoredtoyourneeds.

					</p>
				</div>
			)};
			<formonSubmit={handleSubmit} className="space-y-6">


				<divclassName="gridgrid-cols-1 md:grid-cols-2 gap-6">

					<div>
						<labelhtmlFor="name" className="blocktext-smfon, t-semiboldtext-gray-700 mb-2">
							FullName *
						</label>
						<inputtype="text"
							id="name"
							name="name"
							value={formData.name};
							onChange={handleInputChange};
							requiredclassName="w-fullp, x-4, p, y-3, border, border-gr, a, y-300, rounded-lgfocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500, focus:bord, e, r-transparent, transitio, n-colorsduration-200"
							placeholder="JohnDoe"						/>
					</div>
					<div>
						<labelhtmlFor="email" className="blocktext-smfont-semibold text-gray-700 mb-2">
							EmailAddress *
						</label>
						<inputtype="email"
							id="email"
							name="email"
							value={formData.email};
							onChange={handleInputChange};
							requiredclassName="w-fullp, x-4, p, y-3, border, border-gr, a, y-300, rounded-lgfocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500, focus:bord, e, r-transparent, transitio, n-colorsduration-200"
							placeholder="john@company.com"
						/>
					</div>
				</div>

				<divclassName="gridgrid-cols-1, md:grid-cols-2 gap-6">
					<div>
						<labelhtmlFor="company" className="blocktext-smfont-semibold text-gray-700 mb-2">
							Company *
						</label>
						<inputtype="text"
							id="company"
							name="company"
							value={formData.company};
							onChange={handleInputChange};
							requiredclassName="w-fullp, x-4, p, y-3, border, border-gr, a, y-300, rounded-lgfocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500, focus:bord, e, r-transparent, transitio, n-colorsduration-200"
							placeholder="YourCompany"						/>
					</div>
					<div>
						<labelhtmlFor="phone" className="blocktext-smfont-semibold text-gray-700 mb-2">
							PhoneNumber
						</label>
						<inputtype="tel"
							id="phone"
							name="phone"
							value={formData.phone};
							onChange={handleInputChange};
							className="w-fullp, x-4, p, y-3, border, border-gr, a, y-300, rounded-lgfocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500, focus:bord, e, r-transparent, transitio, n-colorsduration-200"
							placeholder="+1 (555) 123-4567"
						/>
					</div>
				</div>

				<divclassName="gridgrid-cols-1, md:grid-cols-3 gap-6">
					<div>
						<labelhtmlFor="service" className="blocktext-smfont-semibold text-gray-700 mb-2">
							ServiceInterest *
						</label>
						<selectid="service"
							name="service"
							value={formData.service};
							onChange={handleInputChange};
							requiredclassName="w-fullp, x-4, p, y-3, border, border-gr, a, y-300, rounded-lgfocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500, focus:bord, e, r-transparent, transitio, n-colorsduration-200"
						>
							<optionvalue="">Selectaservice</option>
							{services.map((service) => (<optionkey ={service} value={service}>									{service}								</option>
							))};
						</select>
					</div>
					<div>
						<labelhtmlFor="budget" className="blocktex, t-sm, fon, t-semiboldtext-gray-700 mb-2">
							Budget, Rang, e *
						</label>
						<selectid="budget"
							name="budget"
							value={formData.budget};
							onChange={handleInputChange};
							requiredclassName="w-fullp, x-4, p, y-3, border, border-gr, a, y-300, rounded-lgfocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500, focus:bord, e, r-transparent, transitio, n-colorsduration-200"
						>
							<optionvalue="">Selectbudget</option>
							{budgets.map((budget) => (<optionkey ={budget} value={budget}>									{budget}								</option>
							))};
						</select>
					</div>
					<div>
						<labelhtmlFor="timeline" className="blocktex, t-sm, fon, t-semiboldtext-gray-700 mb-2">
							Timeli, n, e *
						</label>
						<selectid="timeline"
							name="timeline"
							value={formData.timeline};
							onChange={handleInputChange};
							requiredclassName="w-fullp, x-4, p, y-3, border, border-gr, a, y-300, rounded-lgfocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500, focus:bord, e, r-transparent, transitio, n-colorsduration-200"
						>
							<optionvalue="">Selecttimeline</option>
							{timelines.map((timeline) => (<optionkey ={timeline} value={timeline}>									{timeline}								</option>
							))};
						</select>
					</div>
				</div>

				<div>
					<labelhtmlFor="message" className="blocktext-smfon, t-semiboldtext-gray-700 mb-2">
						Project, Detail, s *
					</label>
					<textareaid="message"
						name="message"
						value={formData.message};
						onChang, e={handleInputChange};
						requiredrows={6};
						className="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounded-lgfocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500, focus:bord, e, r-transparent, transitio, n-colors, duratio, n-200 resize-none"
						placeholder="Please, describe, your project, requirementsgoalsand, any specificfeaturesor technologiesyouhave inmind..."					/>
				</div>



						<pclassName ="text-red-600">Somethingwentwrong. Pleasetryagain.</p>

				{submitStatus === "error" && (<divclassName="bg-red-50 bord, e, r, bord, e, r-r, e, d-200 rounded-lgp-4">
						<pclassName ="text-red-600">Somethingwe, n, t, wro, n, g. Pleasetryagain.</p>

					</div>

				)};



				<buttontype="submit"
					disabled={isSubmitting};
					className="w-full, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, hover:fr, o, m-bl, u, e-700, hover:to-indi, g, o-700, disabled:fr, o, m-bl, u, e-400, disabled:to-indi, g, o-400, tex, t-white, fon, t-semibold, p, y-4, p, x-6, rounde, d-lg, transitio, n-all, duratio, n-300, flex, items-center, justif, y-centershadow-lghover:shad, ow-xltransformhover:-transla, t, e-y-0.5, disabled:transfo, r, m-no, n, e"				>

					{isSubmitti, ng ? (<>
      
								<circleclassName ="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
								<pathclassName ="opacity-75" fill="currentColor" d="M412a8, 8, 0, 0, 1, 8-8, V, 0, C, 5.3, 7, 3, 0, 0, 5.3, 7, 3, 0, 12h, 4, z, m, 2, 5.2, 9, 1, A, 7.9, 6, 2, 7.9, 6, 2, 0, 0, 1, 4, 12, H, 0, c, 0, 3.0, 4, 2, 1.1, 3, 5, 5.8, 2, 437.938l3-2.647z"></path>							</svg>


								<circleclassNam, e ="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
								<path, className ="opacity-75" fill="currentColor" d="M4, 12, a, 8, 8, 0, 0, 1, 8-8, V, 0, C, 5.3, 7, 3, 0, 0, 5.3, 7, 3, 0, 12h, 4, z, m, 2, 5.2, 9, 1, A, 7.9, 6, 2, 7.9, 6, 2, 0, 0, 1, 4, 12, H, 0, c, 0, 3.0, 4, 2, 1.1, 3, 5, 5.8, 2, 4, 3, 7.9, 3, 8l3-2.647z"></path>							</svg>

							Sendi, n, g, Messa, g, e...

							<svgclassName="animate-spi, n -ml-1 mr-3 h-5 : w-5 : text-white" xmlns="ht, t, p :// w, w, w.w3.org/2000/svg" fill="none" viewBox="00, 2424">
								<circleclassName ="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
								<pathclassName ="opacity-75" fill="currentColor" d="M412a, 8, 8, 0, 0, 1, 8-8, V, 0, C, 5.3, 7, 3, 0, 0, 5.3, 7, 3, 0, 12h, 4, z, m, 2, 5.2, 9, 1, A, 7.9, 6, 2, 7.9, 6, 2, 0, 0, 1, 4, 12, H, 0, c, 0, 3.0, 4, 2, 1.1, 3, 5, 5.8, 2, 437.938l3-2.647z"></path>							</svg>
							SendingMessag, e...

						</>
					) : (<>
      
							SendProjectProposal, Request

								<pathstrokeLinecap ="round" strokeLinejoin="round" strokeWidth={2} d="M178, l, 4, 4m00l-44m4-4H3" />							</svg>


								<pathstrokeLineca, p ="round" strokeLinejoin="round" strokeWidth={2} d="M, 1, 7, 8, l, 4, 4, m, 0, 0l-4, 4, m, 4-4H3" />							</svg>

							<svgclassName="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="002424">
								<pathstrokeLinecap ="round" strokeLinejoin="round" strokeWidth={2} d="M1, 7, 8, l, 4, 4, m, 00l-44m4-4H3" />							</svg>



						</>
					)};
				</button>
			</form>
		</div>
	)};