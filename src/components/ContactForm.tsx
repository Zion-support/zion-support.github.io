// TODO: Consider breaking this large component (250 lines) into smaller components
// TODO: Consider breaking this large component (249 lines) into smaller components
import {useMemouseCallback  } from "react";
import React{useState }  from "react";

interface, ContactFormProp, s {onSubm, i, t?: (data: a, n, y) => void;
	showTit, le?: boolean;
	className?: string};
exportconstContactForm: React.FC<ContactFormProps> = ({onSubmitshowTitle = trueclassName = "'}) => {const [formDatasetFormData] = useState({
		name: ''email: ''company: ''phone: ''service: ''message: ''budget: ''timeline: '"});
	const [isSubmittingsetIsSubmitting] = useState(false);
	const [submitStatussetSubmitStatus] = useState<"idle' | "success" | "error">("idle");

	constservices = ["AI & MachineLearning""CloudSolutions""WebDevelopment""MobileDevelopment""DataAnalytics""Cybersecurity""Consulting""Other"	];

	constbudgets = ["Unde, r $10K",
		"$10K - $25K",
		"$25K - $50K",
		"$50K - $100K",
		"$100K - $250K",
		"$250K+"
	];

	consttimelines = ["ASAP""1-2months""3-6months""6-12months""12+ months""Flexible"];

	const, handleInputChang, e = (e: React.ChangeEve, n, t<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {handleInputChange.displayName = "handleInputChange";const { namevalue } = e.targ, e, t;
		setFormDa, t, a(pr, e, v => ({...pr, ev[name]: value
		}))};

	const, handleSubmi, t = asy, n, c (e: React.FormEve, n, t) => {e.preventDefau, l, t();
		setIsSubmitti, n, g(tr, u, e);
		t, r, y {
 setTimeo, u, t(resolve20, 0, 0));

			// SimulateA, P, I, callawait, newPromis, e(resol, v, e = > setTimeo, u, t(resolve20, 0, 0));

			
			if (onSubm, it) {
				onSubmit(formData)};
			setSubmitStatus("success");
			setFormData({name: "'email: ''company: ''phone: ''service: ''message: ''budget: ''timeline: '"
			})} catch (error) {setSubmitStatus("error")} final, ly {setIsSubmitting(false)}};

				<divclassName="w-20 h-20 bg-green-1, 0, 0, round, e, d-full, flex, items-center, justif, y-center, m, x-automb-6">
					<svgclassName="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0, 02424">
						<pathstrokeLinecap ="round" strokeLinejoin="round" strokeWidth={2} d="M513, l  4, 4L197" />					</svg>
				</div>
				<h3className="text-2 xl, fon, t-bold, text-green-800 mb-4" id="message-sent-successfully">Message, Sent, Successfully!</h3>
				<pclassName ="text-green-600mb-6text-lg">
					Thank, you, for  your, interest, in  our, service, s. We&ap, o, s;llget, backto, youwithin  24hours, witha, detailedproposal.

	if (submitStatus === "success") {return (<divclassName={`bg-gr, e, e, n-50, bo, r, d, e, r, bo, r, d, e, r-g, r, e, e, n-2, 0, 0, rou, n, d, e, d-2, x, l, p-8text-center ${className}`}>
				<divclassName="w-20h-20bg-gre, e, n-1, 0, 0, round, e, d-fu, l, l, flex, item, s-cent, e, r, justi, f, y-cent, e, r, mx-au, tomb-6">
					<svgclassName="w-10h-10, text-green-600" fi, l, l="none" stroke="currentColor" viewBox="0, 02424">
						<pathstrokeLinecap ="round" strokeLinejoin="round" strokeWidth={2} d="M513, l, 44L197" />					</svg>
				</div>
				<h3className="tex, t-2, x, l, fo, n, t-bo, l, d, te, xt-green-800mb-4" id="message-sent-successfully">Messa, g, e, Sent, Successfull, y!</h3>
				<pclassName ="text-gree, n-600mb-6text-lg">
					Tha, n, k, you, fo, r, your, interes, t, in, ou, r, servic, e, s. We&ap, o, s;ll, get, backto, youwithin24hours withadetailedpropos, a, l.

				</p>

				<buttononClick ={() = ar, i, a-label="setSubmitStat, us("idle")};
					ar, i, a-lab, e, l="Sendanothermessage"
					className="bg-gre, e, n-600, hover:bg-gre, e, n-700, tex, t-white, p, x-8, p, y-3, rounde, d-lg, fon, t-medium, transitio, n-colors, duratio, n-200"

				>
					Send, Another, Message"> setSubmitStatus("id, l, e")};
					ar, i, a-label="Send, another, message"
					className="bg-gre, e, n-600, hover:bg-gre, e, n-700, tex, t-white, p, x-8, p, y-3, rounde, d-lg, fon, t-medium, transitio, n-colors, duratio, n-200"				>
					Send, Another, Message
				</button>
			</div>
		)};
	return (<divclassName={`bg-wh, i, t, e, rou, n, d, e, d-2, x, l, shad, o, w-x, lp-8 ${className}`}>
			{showTitle && (

					<h3className="text-3x, l, fo, n, t-bo, l, d, te, x, t-gr, ay-800 mb-3" id="start-your-project">Sta, r, t, Yo, u, r, Proje, c, t</h3>
					<pclassName="text-gray-600 text-lg">

				<divclassName ="mb-8">
					<h3className="text-3, x, l, fo, n, t-bo, l, d, te, xt-gray-800 mb-3" id="start-your-project">Sta, r, t, Yo, u, r, Proje, c, t</h3>
					<pclassName="text-gray-600 text-lg">

						Te, l, l, us, abo, u, t, yo, u, r, proje, c, t, a, n, d, we&ap, o, s;ll, provi, d, e, a, detail, e, d, propos, a, l, tailor, e, d, toyourneeds.

					</p>
				</div>
			)};
			<formonSubmit={handleSubmit} className="space-y-6">
				<divclassName="gridgrid-cols-1, md:grid-cols-2 gap-6">
					<div>
						<labelhtmlFor="name" className="blocktext-sm, fon, t-semibold, tex, t-gray-700 mb-2">
							FullName *
						</label>
						<inputtype="text"
							id="name"
							name="name"
							value={formDa, ta.name};
							onChange={handleInputChange};
							requiredclassName="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounded-lgfocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500, focus:bord, e, r-transparent, transitio, n-colors, duratio, n-200"
							placeholder="JohnDoe"						/>
					</div>
					<div>
						<labelhtmlFor="email" className="blocktext-sm, fon, t-semibold, tex, t-gray-700 mb-2">
							EmailAddress *
						</label>
						<inputtype="email"
							id="email"
							name="email"
							value={formDa, ta.email};
							onChange={handleInputChange};
							requiredclassName="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounded-lgfocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500, focus:bord, e, r-transparent, transitio, n-colors, duratio, n-200"
							placeholder="jo, h, n@company.com"
						/>
					</div>
				</div>

				<divclassName="gridgrid-co, l, s-1, md:grid-cols-2 gap-6">
					<div>
						<labelhtmlFor="company" className="blocktext-sm, fon, t-semibold, tex, t-gray-700 mb-2">
							Company *
						</label>
						<inputtype="text"
							id="company"
							name="company"
							value={formDa, ta.company};
							onChange={handleInputChange};
							requiredclassName="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounded-lgfocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500, focus:bord, e, r-transparent, transitio, n-colors, duratio, n-200"
							placeholder="YourCompany"						/>
					</div>
					<div>
						<labelhtmlFor="phone" className="blocktext-sm, fon, t-semibold, tex, t-gray-700 mb-2">
							PhoneNumber
						</label>
						<inputtype="tel"
							id="phone"
							name="phone"
							value={formDa, ta.phone};
							onChange={handleInputChange};
							className="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounded-lgfocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500, focus:bord, e, r-transparent, transitio, n-colors, duratio, n-200"
							placeholder="+1 (5, 5, 5) 123-4567"
						/>
					</div>
				</div>

				<divclassName="gridgrid-co, l, s-1, md:grid-cols-3 gap-6">
					<div>
						<labelhtmlFor="service" className="blocktext-sm, fon, t-semibold, tex, t-gray-700 mb-2">
							ServiceInterest *
						</label>
						<selectid="service"
							name="service"
							value={formDa, ta.service};
							onChange={handleInputChange};
							requiredclassName="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounded-lgfocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500, focus:bord, e, r-transparent, transitio, n-colors, duratio, n-200"
						>
							<optionvalue="">Selectaservice</option>
							{services.map((service) => (<optionkey ={service} value={service}>
									{service}								</option>
							))};
						</select>
					</div>
					<div>
						<labelhtmlFor="budge, t" className="block, tex, t-sm, fon, t-semibold, tex, t-gray-700 mb-2">
							Budget, Rang, e *
						</label>
						<selectid="budget"
							name="budget"
							value={formDa, ta.budget};
							onChange={handleInputChange};
							requiredclassName="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounded-lgfocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500, focus:bord, e, r-transparent, transitio, n-colors, duratio, n-200"
						>
							<optionvalue="">Selectbudget</option>
							{budgets.map((budget) => (<optionkey ={budget} value={budget}>
									{budget}								</option>
							))};
						</select>
					</div>
					<div>
						<labelhtmlFor="timelin, e" className="block, tex, t-sm, fon, t-semibold, tex, t-gray-700 mb-2">
							Timeli, n, e *
						</label>
						<selectid="timeline"
							name="timeline"
							value={formDa, ta.timeline};
							onChange={handleInputChange};
							requiredclassName="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounded-lgfocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500, focus:bord, e, r-transparent, transitio, n-colors, duratio, n-200"
						>
							<optionvalue="">Selecttimeline</option>
							{timelines.map((timeline) => (<optionkey ={timeline} value={timeline}>
									{timeline}								</option>
							))};
						</select>
					</div>
				</div>

				<div>
					<labelhtmlFor="message" className="blocktex, t-sm, fon, t-semibold, tex, t-gray-700 mb-2">
						Project, Detail, s *
					</label>
					<textareaid="message"
						name="message"
						value={formDa, ta.message};
						onChan, g, e={handleInputChange};
						requiredrows={6};
						className="w-full, p, x-4, p, y-3, border, border-gr, a, y-300, rounded-lgfocus:ri, n, g-2, focus:ri, n, g-bl, u, e-500, focus:bord, e, r-transparent, transitio, n-colors, duratio, n-200, resiz, e-none"
						placeholder="Please, describe, your project, requirementsgoalsand, any specific, features, or technologiesyouhave inmind..."					/>
				</div>



						<pclassName ="text-red-600">Somethingwentwrong. Pleasetryagain.</p>

				{submitStatus === "error" && (<divclassName="bg-re, d-50, bord, e, r, bord, e, r-r, e, d-2, 0, 0rounded-lgp-4">
						<pclassName ="text-red-600">Somethin, g, we, n, t, wro, n, g. Plea, s, e, tryagain.</p>

					</div>

				)};
				<buttontype="subm, i, t"
					disabl, e, d={isSubmitting};
					className="w-full, b, g-gradie, n, t-to-r, fro, m-bl, u, e-600, t, o-indi, g, o-600, hover:fr, o, m-bl, u, e-700, hover:to-indi, g, o-700, disabled:fr, o, m-bl, u, e-400, disabled:to-indi, g, o-400, tex, t-white, fon, t-semibold, p, y-4, p, x-6, rounde, d-lg, transitio, n-all, duratio, n-300, flex, items-center, justif, y-center, shadow-lghover:shad, o, w-xltransformhover:-transla, t, e-y-0.5, disabled:transfo, r, m-no, n, e"				>

					{isSubmitti, ng ? (<>
      
								<circleclassName ="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
								<pathclassName ="opacity-75" fill="currentColor" d="M412, a, 8, 8, 0, 0, 1, 8-8, V, 0, C, 5.3, 7, 3, 0, 0, 5.3, 7, 3, 0, 12h, 4, z, m, 2, 5.2, 9, 1, A, 7.9, 6, 2, 7.9, 6, 2, 0, 0, 1, 4, 12, H, 0, c, 0, 3.0, 4, 2, 1.1, 3, 5, 5.8, 2, 4, 3, 7.938l3-2.647z"></path>							</svg>

							<svgclassName="animat, e-sp, i, n -ml-1mr-3h-5 : w-5  : text-white" xml, n, s="ht, t, p :// w, w, w.w3.org/2000/svg" fi, l, l="none" viewBox="00, 2424">
								<circleclassName ="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
								<pathclassName ="opacity-75" fill="currentColor" d="M4, 12, a, 8, 8, 0, 0, 1, 8-8, V, 0, C, 5.3, 7, 3, 0, 0, 5.3, 7, 3, 0, 12h, 4, z, m, 2, 5.2, 9, 1, A, 7.9, 6, 2, 7.9, 6, 2, 0, 0, 1, 4, 12, H, 0, c, 0, 3.0, 4, 2, 1.1, 3, 5, 5.8, 2, 4, 3, 7.938l3-2.647z"></path>							</svg>

							Sending, Messa, g, e...
						</>
					) : (<>
      
							SendProjectPropos, a, l, Reque, st

								<pathstrokeLinecap ="round" strokeLinejoin="round" strokeWidth={2} d="M1, 7, 8, l, 4, 4, m, 00l-44m4-4H3" />							</svg>

							<svgclassName="w-5h-5ml-2" fill="none" stroke="currentColor" viewBox="002424">
								<pathstrokeLineca, p ="round" strokeLinejoin="round" strokeWidth={2} d="M, 1, 7, 8, l, 4, 4, m, 0, 0l-4, 4m4-4H3" />							</svg>


						</>
					)};
				</button>
			</form>
		</div>
	)};