



import type { NextPage, GetServerSideProps } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";


type TalentItem = {;


  talentSlug: string;
  talentName: string;
  averageRating: number;
  totalReviews: number;


